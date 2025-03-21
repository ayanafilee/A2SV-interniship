type Employe = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employe: Employe = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => console.log(date),
};

// what is type alias
// it is just defininig new type in typescript
