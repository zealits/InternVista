"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    findItemInLayout: function() {
        return findItemInLayout;
    },
    moveItemInLayout: function() {
        return moveItemInLayout;
    },
    removeItemInLayout: function() {
        return removeItemInLayout;
    }
});
const findItemInLayout = (item, layout)=>{
    for(let page = 0; page < layout.length; page++){
        for(let column = 0; column < layout[page].length; column++){
            for(let section = 0; section < layout[page][column].length; section++){
                if (layout[page][column][section] === item) {
                    return {
                        page,
                        column,
                        section
                    };
                }
            }
        }
    }
    return null;
};
const removeItemInLayout = (item, layout)=>{
    const locator = findItemInLayout(item, layout);
    if (locator) {
        layout[locator.page][locator.column].splice(locator.section, 1);
    }
    return locator;
};
const moveItemInLayout = (current, target, layout)=>{
    try {
        // Create a deep copy of the layout to avoid mutating the original array
        const newLayout = JSON.parse(JSON.stringify(layout));
        // Get the item from the current location
        const item = newLayout[current.page][current.column][current.section];
        // Remove the item from the current location
        newLayout[current.page][current.column].splice(current.section, 1);
        // Insert the item at the target location
        newLayout[target.page][target.column].splice(target.section, 0, item);
        return newLayout;
    } catch (error) {
        return layout;
    }
};

//# sourceMappingURL=array.js.map