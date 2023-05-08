const world = 'world';

// @ts-ignore
export function hello(who: string = world): string {
  return `Hello ${who}! `;
}