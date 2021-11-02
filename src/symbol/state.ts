/**
 * @author WMXPY
 * @namespace Symbol
 * @description State
 */

export const EmptyStateSymbolText: string = 'state-empty-state';
export const EmptyStateSymbol: unique symbol = Symbol.for(EmptyStateSymbolText);
export type SEmptyState = typeof EmptyStateSymbol;

export const InitialStateSymbolText: string = 'state-initial-state';
export const InitialStateSymbol: unique symbol = Symbol.for(InitialStateSymbolText);
export type SInitialState = typeof InitialStateSymbol;
