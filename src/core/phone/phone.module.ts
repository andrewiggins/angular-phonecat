// Define the `core.phone` module and interfaces

// Combining the date from phones.json and the specific phone json
// because ngResource expects that contract to be the same
interface IPhone {
  age: number;
  id: string;
  name: string;
  imageUrl: string;
  images: string [];
  snippet: string;

  // ...
  // leaving out other fields for now
}

angular.module('core.phone', ['ngResource']);
