import { SocialNetwork } from "../types"

export function classNames(...classes : string[]) {
    return classes.filter(Boolean).join(' ')
}

export function isValidUrl (url : string) {
    try {
        new URL(url)
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}
 

export const ensureUniqueIds = (links: SocialNetwork[]) => {
    const ids = new Set<number>();
    return links.map((link) => {
      let id = link.id;
      while (ids.has(id)) {
        id = id + 1; // Incrementa el ID hasta que sea único
      }
      ids.add(id);
      return { ...link, id };
    });
};