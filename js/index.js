const h2 = document.querySelector('.quiz>h2')
const ul = document.querySelector('.quiz>ul')
let time = 10000
const resultTag=document.querySelector('.result')
answerLi = []
let correctAnswers=0
const data = [
    {
        id: 1,
        question: '1-تعداد حلقه های المپیک؟',
        answers: ['5عدد', '6عدد', '7عدد', '8عدد'],
        status: 0
    },
    {
        id: 2,
        question: '2-ارتفاعات سهند در کدام استان قرار دارد؟',
        answers: [, 'آذربایجان غربی', 'کردستان', 'زنجان', 'آذربایجان شرقی'],
        status: 3
    },
    {
        id: 3,
        question: '3-کدام ورزشکار ایرانی موفق به کسب مدال طلای المپیک 1966 آتلانتا شد؟',
        answers: ['امیررضا خادم', 'حسین رضا زاده', 'رسول خادم', 'عباس جدیدی'],
        status: 2
    },
    {
        id: 4,
        question: '4-کدام کارگردان رکورد دار دریافت سیمرغ بهترین فیلم و کارگردانی در جشنواره فیلم فجر است؟',
        answers: ['مجید مجیدی', 'ابراهیم حاتمی کیا', 'اصغر فرهادی', 'داریوش مهرجویی'],
        status: 1
    },
    
]
let i = 0
quiz()
let myTime = setInterval(quiz, time)


function quiz() {
    if (i < data.length) {
        h2.innerHTML = data[i].question
        ul.innerHTML = ''
        data[i].answers.map((val) => {
            let li = document.createElement('li')
            li.innerHTML = val
            ul.appendChild(li)

        })
        answerLi = document.querySelectorAll('ul>li')

        i++
    } else {
        h2.innerHTML='پایان'
        ul.remove()
        let result=document.createElement('p')
        resultTag.appendChild(result)
        result.innerHTML='تعداد پاسخ های صحیح' + ':' + correctAnswers
        clearInterval(myTime)

    }

    answerLi.forEach((val, index) => {
        val.addEventListener('click', (e) => {
            if (index == data[i - 1].status) {
                val.style.background = 'yellowgreen'
                correctAnswers++
                
            } else {
                val.style.background = 'red'
                answerLi[data[i - 1].status].style.background = 'yellowgreen'
            }

            setTimeout(() => {
                quiz()
            }, 1000);
        })
    })
}



