# Sudoo-Symbol

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Symbol/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Symbol/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Symbol/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Symbol)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fsymbol.svg)](https://badge.fury.io/js/%40sudoo%2Fsymbol)
[![downloads](https://img.shields.io/npm/dm/@sudoo/symbol.svg)](https://www.npmjs.com/package/@sudoo/symbol)

Symbol Magic

## Install

```sh
yarn add @sudoo/symbol
# Or
npm install @sudoo/symbol --save
```

## Example

```ts
import { SEmptyReturn, EmptyReturnSymbol } from "@sudoo/symbol";

export const yourFunction = (arg: any): SEmptyReturn | AwesomeObject | null => {

    if (arg === null) {
        return null;
    }

    if (arg.hasNoData) {
        return EmptyReturnSymbol;
    }

    return arg.awesomeObject;
};
```

## Note

