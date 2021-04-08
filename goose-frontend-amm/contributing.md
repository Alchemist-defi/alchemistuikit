# Contributing to the Pancake ecosystem 🥞

Thanks for taking the time to contribute ! You can start by reading our [Contribution guidelines](https://docs.pancakeswap.finance/code/contributing) first.

## Setup

Install the dependencies

```text
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Change BSC network

To change the BSC network from test net, modify the `REACT_APP_CHAIN_ID` value in `.env`.

* MAIN NET `56`
* TEST NET `97`

## Tests

Firstly, if you need to install cypress

```javascript
yarn cypress install
```

Then to run the Cypress suite in CLI

```javascript
yarn cypress run
```

Or, to run Cypress with its GUI

```javascript
yarn cypress open
```

## Localisation

_In order for the Crowdin API queries to work - you will need `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID` env variables set in your root `.env.development.local` file_

### Adding translations

A hook expose the function you need to translate content.

```text
import useI18n from 'hooks/useI18n'
...
const TranslateString = useI18n()
...
TranslateString(id, 'fallback')
```

* **id** is the crowdin id of the string you want to translate.
* **fallback** is a string fallback used if the id cannot be found.

### Variables

The translation component can handle variables being passed in from Crowdin, with no code changes.

It will only work if there is only **one** variable passed in, and if that variable within Crowdin is wrapped in **%** signs, i.e.:

Translation in crowdin: `%asset% Earned` [link](https://crowdin.com/translate/pancakeswap/8/en-de#330)

