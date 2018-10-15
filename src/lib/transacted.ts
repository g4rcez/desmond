type Transaction = any;
type TransactionFunction = (t: Transaction) => any;

interface Knex {
    transaction: (fn: TransactionFunction) => any;
}
interface KnexParams {
    transacting?: Transaction;
}

/**
 * Create a function with parameter `Transaction`.
 * `Transaction` is either passed on from `params.transacting`, or new transaction
 * is created using `knex.transaction`.
 */
const transacted = (knex: Knex, params: KnexParams): TransactionFunction => fn => {
        if (params && params.transacting) {
            return fn(params.transacting);
        }
        return knex.transaction(t => fn(t));
    };

export default transacted;
