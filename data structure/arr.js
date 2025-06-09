//sum of target
let arr = [1,2,3,4,5];
let target=[3,5];
for (let i=0;i<arr.length;i++)
{
  for (let j=0;j<target.length;j++) 
  {
      if(target[j]===arr[i])
    {
    
    let sum=0;
    sum=sum+target[j];
    console.log(sum);

    
    }

}
}

/////binary search


/**let arr = [1, 2, 3, 4, 5, 6];
let target = 3;
let n = 6;

function binary() {
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("element found at index " + mid);
            return;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    console.log("element not found");
}

binary();**/
