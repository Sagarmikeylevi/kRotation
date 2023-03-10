const kRotation = (arr, k) => {
  k = k % arr.length;
  if (k === 0) {
    return arr;
  }
  const temp = [];
  for(let i = 0; i<k; i++){
    temp[i] = arr[i]
  }
  let l = 0;
  for(let i = k; i<arr.length; i++){
    arr[l] = arr[i];
    l++;
  }
  l = 0;
  for(let i = arr.length - k; i<arr.length; i++){
    arr[i] = temp[l];
    l++;
  }

  return arr;
};


const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
console.log(kRotation(Arr, k));
