/*১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।*/
function leepYear(year)
{
    if(((year % 4 == 0) && (year%100!=0)) || (year%400==0))
    {
        return true;
    }
    return false;
}
const checkYourYear = leepYear(2100);
console.log('Your year is leap year or not? ',checkYourYear);