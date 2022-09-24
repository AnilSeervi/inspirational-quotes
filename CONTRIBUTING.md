# Contribution Guide

Hi! We're really excited that you're interested in contributing to this package! Before submitting your contribution, please read through the following guide.

## Repo Setup

The `inspirational-quotes` packages' dependencies are installed using [Yarn](https://yarnpkg.com/).

To develop and test the `inspirational-quotes` package:

1. Clone the repo

```shell
git clone https://github.com/AnilSeervi/inspirational-quotes.git
```

2. `cd` into the repo

```shell
cd inspirational-quotes
```

3. Install dependencies

```shell
yarn
```

4. To Build the package

```shell
yarn build
```

## Adding a new quote

1. Open `src/quotes.ts` file

2. Add a new quote in the following format to the end of the `quotes` array:

```ts
{
  quote: `The quote`,
  author: `The author of the quote`,
  source: `The source of the quote (optional)`,
}
```

### Some rules to follow while adding a new quote

- The values for `quote`, `author` and `source` should be strings and should be wrapped in backticks(\`\`).
- The `quote` should use right single quotation mark `’`(\u2019) (String.fromCharCode(0x2019)), not apostrophe `'` (String.fromCharCode(0x27)). Copy the right single quotation mark from below:

```md
’
```

- The `author` should be the name of the person who said the quote.
- The `quote` should end with a period(`.`) or exclamation(`!`) mark.
- The `source` should be the name of the book, article, video, etc. from where the quote is taken. If the quote is not taken from any source or you don't remeber the source, then the `source` key can be omitted.

> Note: If any of the above rules are not followed, the tests will fail.
>
> Bonus: You can add your GitHub username after the closing braces of the quote object.

## Testing

To test the package, run the following command:

```shell
yarn test
```

> Make sure to run tests before submitting a PR.

## Linting and Formatting

The `inspirational-quotes` package uses [Prettier](https://prettier.io/) for formatting and [ESLint](https://eslint.org/) for linting.

To check formatting of code, run the following command:

```shell
yarn pret
```

To check for lint errors in the code, run the following command:

```shell
yarn lint
```

> Make sure to properly format and lint the code before submitting a PR.
