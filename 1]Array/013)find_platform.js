
// Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.

function findPlatform( arr, dep, n)
{
    var plat_needed = 1, result = 1;
    var i = 1, j = 0;
    for (var i = 0; i < n; i++) {
        plat_needed = 1;
        for (var j = 0; j < n; j++) {
            if(i != j)
              if(arr[i] >= arr[j] && dep[j] >= arr[i])
                  plat_needed++;
        }
        result = Math.max(result, plat_needed);
    }
    console.log(result);
}

var arr = [0900, 0940, 0950, 1100, 1500, 1800]
var dep = [0910, 1200, 1120, 1130, 1900, 2000]
var n = 6;
findPlatform(arr, dep, n)