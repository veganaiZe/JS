/**
 * Find maximum subarray sum of size K
 * ===================================
 *
 * - sliding window
 *
 * Max sum of 3 contiguous elements.
 *
 */


function maximum_sum(array) {
    var max_sum = 0
    var i = 0

    for ( ; i+2 < array.length; ++i) {
            var sum = array[i] + array[i+1] + array[i+2]
            if (sum > max_sum) { max_sum = sum }
    }

    return max_sum
}


var result = maximum_sum([85, 72, 71, 31, 59, 27, 55, 51, 66, 39,
                          65, 90, 22, 34, 47, 42, 92, 18, 96, 83])
console.assert(result == 228, result)

