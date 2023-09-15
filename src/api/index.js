// // Function to fetch available booking times for a given date
// async function fetchAPI(date) {
//     console.log('today :', date);
//     try {
//       const response = await fetch(`https://example.com/api/bookings?date=${date}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       console.log('data :', data);
//       return data.availableTimes; // Assuming the response has a property named 'availableTimes'
//     } catch (error) {
//         console.log("error",error);
//       throw error;
//     }
//   }

//   // Function to submit booking form data
//   async function submitAPI(formData) {
//     try {
//       const response = await fetch('https://example.com/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to submit data');
//       }
//       return true;
//     } catch (error) {
//       throw error;
//     }
//   }

//   export { fetchAPI, submitAPI };

// const seededRandom = function (seed) {
//     var m = 2**35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//         return (s = s * a % m) / m;
//     };
// }

// export const fetchAPI = function(date) {
//     let result = [];
//     let random = seededRandom(date.getDate());

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if(random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     console.log("RESULT: ", result);
//     return result;
// };
// export const submitAPI = function(formData) {
//     return true;
// };


const availableTimesByDate = {
    '2023-08-29': ['10:00', '11:00', '12:00'],
    '2023-09-01': ['10:00', '11:00', '12:00'],
    '2023-09-02': ['14:00', '15:00', '16:00'],
    '2023-09-03': ['10:00', '11:00', '12:00'],
    '2023-09-04': ['14:00', '15:00', '16:00'],
    '2023-09-05': ['10:00', '11:00', '12:00'],
    '2023-09-06': ['14:00', '15:00', '16:00'],
    '2023-09-07': ['10:00', '11:00', '12:00'],
    '2023-09-08': ['14:00', '15:00', '16:00'],
    '2023-09-09': ['10:00', '11:00', '12:00'],
    '2023-09-10': ['14:00', '15:00', '16:00'],
    '2023-09-11': ['10:00', '11:00', '12:00'],
    '2023-09-12': ['14:00', '15:00', '16:00'],
    '2023-09-13': ['10:00', '11:00', '12:00'],
    '2023-09-14': ['14:00', '15:00', '16:00'],
    '2023-09-15': ['10:00', '11:00', '12:00'],
    '2023-09-16': ['14:00', '15:00', '16:00'],
    '2023-09-17': ['10:00', '11:00', '12:00'],
    '2023-09-18': ['14:00', '15:00', '16:00'],
    '2023-09-19': ['10:00', '11:00', '12:00'],
    '2023-09-20': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                resolve(availableTimesByDate[date])
            }
            else {
                reject(new Error('No available times for the selected date.'));
            }
        }, 1000)
    })
}

const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData) {
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form submission failed.'));
            }
        }, 1000); // Simulate API delay
    });
};

export { fetchAPI, submitAPI }