import { sanitizeDecimal, sortItems } from './helpers';


const getOptions = () => [
  { name: '3rd', id: 3 },
  { name: 'Secondly', id: 2 },
  { name: 'Fourth', id: 4 },
  { name: 'First', id: 1 },
];

const sorts = {
  'asc'    : { sortBy: 'id' },
  'desc'   : { sortBy: 'id', sortDesc: true },
  'length' : { sortBy: 'name', customSorter: (a,b) => { return a.length < b.length ? 1 : -1; } },
};


describe('helpers.js', () => {
  describe('filterItems', () => {});
  describe('searchItems', () => {});
  describe('hashCode', () => {});
  describe('searchableFields', () => {});


  describe('sortItems', () => {
    let items;
    let sortedItems;

    beforeEach(() => {
      items = getOptions();
    });

    // should it ever? we are presuming objects everywhere, at present. TODO
    it.skip('sorts a list of non-objects if no sortBy', () => {
      let arr = ['cat', 'apple', 'ball'];

      sortedItems = sortItems(arr);
      expect(sortedItems).toEqual(['apple', 'ball', 'cat']);
    });

    it('sorts according to the sortBy prop', () => {
      sortedItems = sortItems(items, sorts['asc']);
      expect(sortedItems).toEqual([
        { name: 'First', id: 1 },
        { name: 'Secondly', id: 2 },
        { name: '3rd', id: 3 },
        { name: 'Fourth', id: 4 },
      ]);
    });

    it('can sort descending', () => {
      sortedItems = sortItems(items, sorts['desc']);
      expect(sortedItems).toEqual([
        { name: 'Fourth', id: 4 },
        { name: '3rd', id: 3 },
        { name: 'Secondly', id: 2 },
        { name: 'First', id: 1 },
      ]);
    });

    it('sorts using a custom sort function', () => {
      sortedItems = sortItems(items, sorts['length']);
      expect(sortedItems).toEqual([
        { name: 'Secondly', id: 2 },
        { name: 'Fourth', id: 4 },
        { name: 'First', id: 1 },
        { name: '3rd', id: 3 },
      ]);
    });
  });
});
