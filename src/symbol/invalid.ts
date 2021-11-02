/**
 * @author WMXPY
 * @namespace Symbol
 * @description Parse
 */

export const InvalidJSONSymbolText: string = 'invalid-json';
export const InvalidJSONSymbol: unique symbol = Symbol.for(InvalidJSONSymbolText);
