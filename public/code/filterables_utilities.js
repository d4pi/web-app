'use strict';

var d4pi_filterables = null;
var d4pi_nextjs_set_filterables = null;

var d4pi_item_filters = [];
var d4pi_attribute_filters = [];

function d4pi_initialize_filterables_utilities(
    nextjs_d4pi_filterables,
    nextjs_set_filterables
) {
    d4pi_filterables = nextjs_d4pi_filterables;
    d4pi_nextjs_set_filterables = nextjs_set_filterables;
}

function d4pi_apply_filters() {
    d4pi_filterables.forEach(filterable => {
        filterable.score = 0;
        filterable.score += d4pi_item_filters.map(filter => filter(filterable)).reduce((totalScore, score) => totalScore + score, 0);
        filterable.itemAttributes.forEach(itemAttribute => {
            filterable.score += d4pi_attribute_filters.map(filter => filter(itemAttribute)).reduce((totalScore, score) => totalScore + score, 0);
        });
    });
    d4pi_nextjs_set_filterables([...d4pi_filterables]);
}
