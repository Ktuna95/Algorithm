/*
    2016년의 month, day를 입력받아 해당하는 요일 찾기

    2월 = 28일, 29일(윤년)
    30일, 31일이 있는 달 확인    
    getDay(); 요일 가져오는 함수
*/

//ßconst year_2016 = date1.setYear(2016); //찾을 년도를 2016년으로 설정

function solution(month, day) {
    
    const weekarr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date1 = new Date(`2016-${month}-${day}`);    
    
    return weekarr[date1.getDay()];
    
    
    
}
solution(5, 24);