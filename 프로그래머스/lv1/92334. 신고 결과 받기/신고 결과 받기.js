//신고 한 id가 1개일 경우, 없는경우도 있음
function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);

    
    console.log(report)
    const newRepo = [...new Set(report)]    
    const out = [];
    const count = Array(id_list.length).fill(0);
    const mail = Array(id_list.length).fill(0);

    for(let r of newRepo){
        let a = r.split(" ")[0];
        let b = r.split(" ")[1];
        let idxB = id_list.indexOf(b);
        count[idxB] += 1;

        // 신고수가 k개 이상인 경우
        if(count[idxB] >= k){
            out.push(id_list[idxB]);    // 정지 리스트에 해당 아이디 추가
        }
    }

    newRepo.map((r, idx) => {
        let a = r.split(' ')[0];
        let b = r.split(' ')[1];

        if(out.indexOf(b)>=0){
            let idx = id_list.indexOf(a);
            mail[idx] += 1;
        }
    })

    return mail;
}
//solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2);
solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"]);