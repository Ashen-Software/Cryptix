/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */
export function getAction(client, action, 
// Some minifiers drop `Function.prototype.name` or can change function
// names so that getting the name by reflection through `action.name` will
// not work.
name) {
    return (params) => client[action.name]?.(params) ??
        client[name]?.(params) ??
        action(client, params);
}
//# sourceMappingURL=getAction.js.map