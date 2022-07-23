const binaryArrayToNumber = arr => {
    let result = 0;
      let reversed = arr.reverse();
      for (let i = 0; i < reversed.length; i++) {
          if (reversed[i] == 1) {
              result += 2**i;
          }
      }
      return result;
  };