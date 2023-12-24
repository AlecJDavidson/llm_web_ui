import * as fs from 'fs';

/**
 * Appends a JSON object to a file.
 * If the file doesn't exist, it will be created.
 * Each new object is appended on a new line.
 *
 * @param filePath - The path to the file.
 * @param data - The JSON object to append.
 */

export const appendJsonObjectToFile = (filePath: string, data: Record<string, any>): void => {
    try {
        // Check if the file exists
        const fileExists = fs.existsSync(filePath);

        // Convert JSON object to a string with newline character
        const jsonString = JSON.stringify(data) + '\n';

        // If the file exists, append the string; otherwise, create the file
        if (fileExists) {
            fs.appendFileSync(filePath, jsonString);
        } else {
            fs.writeFileSync(filePath, jsonString);
        }

        console.log('Data appended to file successfully.');
    } catch (error) {
        console.error('Error appending data to file:');
    }
}


