/*২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।*/
function isEvenOrOdd(age)
{
    if(age%2==0)
    {
        return true;
    }
    return false;
}
const age = 21;
const checkYourAge = isEvenOrOdd(age);
console.log('Your age is even or odd? ',checkYourAge);