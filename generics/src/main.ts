// Generics <T>

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj({}));
console.log(isObj([]));
console.log(isObj("string"));
console.log(isObj(false));
console.log(isObj(3));
console.log(isObj(null));
console.log(isObj(undefined));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue(""));
console.log(isTrue("str"));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue({ name: "Esk" }));
console.log(isTrue([1, 2, 4]));
console.log(isTrue(NaN));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const isTrue2 = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Garry" }));
// console.log(processUser({ name: "Barry" })); because it doesnt have id property.

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(users, "username"));

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }
  set state(state: T) {
    this.data = state;
    return;
  }
}

const store = new StateObject<string>("Johnnys");
console.log(store.state);
store.state = "Marrys";
console.log(store.state);

const store2 = new StateObject<number>(3);
console.log(store2.state);
store2.state = 5;
console.log(store2.state);

const store3 = new StateObject<(string | number | boolean)[]>([12, 32]);
console.log(store3.state);
store3.state = ["Hulogh", "Lets"];
console.log(store3.state);
store3.state = ["does", false, 33];
console.log(store3.state);
