/**
 * @author WMXPY
 * @namespace Symbol
 * @description Value
 */

export const EmptyValueSymbolText: string = 'value-empty-value';
export const EmptyValueSymbol: unique symbol = Symbol.for(EmptyValueSymbolText);
export type SEmptyValue = typeof EmptyValueSymbol;

export const InitialValueSymbolText: string = 'value-initial-value';
export const InitialValueSymbol: unique symbol = Symbol.for(InitialValueSymbolText);
export type SInitialValue = typeof InitialValueSymbol;
