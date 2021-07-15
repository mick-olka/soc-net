
export const updateArrayItem = (items, itemId, objIdName, newObjProps) => {
        items.map(u => {
            if (u[objIdName] === itemId) {
                return {...u, ...newObjProps};
            }
            return u;
        });
}