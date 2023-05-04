import {eslint} from "@betterer/eslint";
import {regexp} from "@betterer/regexp";
import {BettererFileTest} from "@betterer/betterer";

export default {
  // Add tests here ☀️
  'no ts-ignore': () => regexp(/(\/\/\s*@ts-ignore)/i).include('**/*.ts'),
  'no more JavaScript files': () => countFiles('no more JavaScript files!').include('**/*.js').exclude([new RegExp('.+\.config\.js'), new RegExp('.+\.eslintrc\.js')]),
};

function countFiles(issue: string) {
  return new BettererFileTest(async (filePaths, fileTestResult) => {
    filePaths.forEach((filePath) => {
      // In this case the file contents don't matter:
      const file = fileTestResult.addFile(filePath, '');
      // Add the issue to the first character of the file:
      file.addIssue(0, 0, issue);
    });
  });
}
