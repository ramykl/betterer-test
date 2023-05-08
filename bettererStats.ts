import { betterer } from '@betterer/betterer';
import { camelCase } from 'lodash';

async function main() {
  // const options = {
  //   // configPaths: ['./.betterer.ts'],
  //   resultsPath: './.betterer.results'
  // }
  // const results = await betterer.results(options);
  const results = await betterer.results();

  console.log(results)
  let resultString = ''
  for (const testResults of results.resultSummaries) {
    const countByMessage: Record<string, number> = {};
    const name = camelCase(testResults.name);
    Object.values(testResults.details)
      .flatMap((v) => v)
      .forEach((detail) => {
        const message = camelCase(detail.message);
        const metricName = `${name}_${message}`;
        if (metricName in countByMessage) {
          countByMessage[metricName]++;
        } else {
          countByMessage[metricName] = 1;
        }
      });

    for (const [metricName, count] of Object.entries(countByMessage)) {
      resultString += `${metricName}: ${count}\n`
    }
  }
  return resultString
}

main().catch(console.error);
