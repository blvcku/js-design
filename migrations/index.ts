import { runMigration, type RunMigrationConfig } from 'contentful-migration';
import { readdirSync } from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as inquirer from 'inquirer';

dotenv.config({
    path: `../.env`,
});

const migrations = readdirSync(__dirname, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((directory) => directory.name);

inquirer
    .prompt([
        {
            type: `input`,
            name: `environmentId`,
            default: `master`,
            message: `What environment id?`,
        },
        {
            type: `list`,
            choices: migrations,
            name: `migration`,
            message: `Which migration?`,
        },
    ])
    .then(async (answers: { environmentId: string; migration: string }) => {
        try {
            const { default: migrationFunction } = await import(
                path.resolve(__dirname, answers.migration, `index.js`)
            );

            const options: RunMigrationConfig = {
                migrationFunction,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                environmentId: answers.environmentId,
            };

            await runMigration(options);
        } catch (error) {
            console.error(error);
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            return console.error(
                `Script couldn't be rendered in the current environment`,
            );
        }
        console.error(error);
    });
