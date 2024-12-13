import { INewsExtractionStrategy } from '@/types/classes/NewsExtractionStrategy';

import { CoinAcademyNewsStrategy } from './CoinAcademyNewsStrategy';

export class NewsExtractionStrategyFactory {
    private strategies: Map<string, new () => INewsExtractionStrategy> = new Map();

    constructor() {
        this.registerStrategy('coinacademy', CoinAcademyNewsStrategy);
    }

    registerStrategy(key: string, strategy: new () => INewsExtractionStrategy) {
        this.strategies.set(key.toLowerCase(), strategy);
    }

    getStrategy(key: string): INewsExtractionStrategy {
        const StrategyClass = this.strategies.get(key.toLowerCase());
        if (!StrategyClass) {
            throw new Error(`No strategy found for: ${key}`);
        }
        return new StrategyClass();
    }
}
