// storage service
import { getItem, setItem } from '@/utils/storage';

const storage = {
  get: getItem,
  set: setItem,
};

function set(key, value) {
  storage.set(key, value);
}

function get(value) {
  return storage.get(value);
}

function use(s) {
  if (s && s.get) {
    storage.get = s.get;
  }

  if (s && s.set) {
    storage.set = s.set;
  }
}

export default { use };
export { storage, set, get };
