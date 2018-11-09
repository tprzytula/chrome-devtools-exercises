/**
 * @typedef {Object} ApiResponse
 * @property {Array<Book>} items
 *
 * @typedef {Object} Book
 * @property {VolumeInfo} volumeInfo
 *
 * @typedef {Object} VolumeInfo
 * @property {string} title
 * @property {string} description
 */

/**
 *  ISBN can also be written with "-" characters.
 *  API doesn't handle this formatting and needs those to be omitted.
 *  @param {string} isbn
 *  @returns {string} parsedIsbn
 */
const parseIsbn = isbn => isbn.replace(/-/g, '');

/**
 *  Makes a request to fetch a specific book from google API.
 *  @param {string} isbn
 *  @returns {Promise<Object>} result
 */
const fetchBook = (isbn) => {
    return new Promise((resolve) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result)
            })
    });
};

/**
 *  We provide a full ISBN to get the specific book we want as a one to one relationship.
 *  Ensures that the result contains the book we seek for and returns it's details.
 *  @param {ApiResponse} data
 *  @returns {Book} result
 */
const parseResult = data => {
    return data && data.items && data.items.length === 1 && data.items[0];
};

/**
 *
 * @param {string} isbn
 * @returns {VolumeInfo} book
 */
export const findBook = async (isbn) => {
    const parsedIsbn = parseIsbn(isbn);
    const data = await fetchBook(parsedIsbn);
    const book = await parseResult(data);

    const title = book.volumeInfo.title;
    const description = book.volumeInfo.description;

    return {
        title,
        description
    };
};