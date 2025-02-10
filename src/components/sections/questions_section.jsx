"use client"; /////////////

import React, { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const progressRef = useRef(null);

  const faqSections = [
    {
      title: '. أسئلة عامة',
      questions: [
        {
          question: 'ماهو متجر 3 برزرز ؟',
          answer: 'متجر ٣ برذرز هو وجهتك المميزة لشراء الملابس الرجالية الرسمية والأنيقة..',
        },
        {
          question: 'كيف يمكنني التسجيل في المتجر؟',
          answer: 'يمكنك التسجيل من خلال النقر على خيار “تسجيل” في الصفحة الرئيسية وإدخال المعلومات المطلوبة.',
        }, {
          question: 'هل يوجد تطبيق للمتجر؟',
          answer: 'حالياً، المتجر متاح عبر الإنترنت فقط، ولكننا نخطط لإطلاق تطبيق في المستقبل.',
        },
      ],
    },
    {
      title: 'الأسئلة المتعلقة بالطلبات',
      questions: [
        {
          question: 'ماعي وسائل الدفع المتاحة ؟',
          answer: 'نقبل بطاقات الائتمان، بطاقات الخصم، وطرق الدفع الإلكترونية مثل كي كارد',
        },
        {
          question: 'هل احتاج الى تسحيل الدخول للشراء ؟',
          answer: 'لا، يمكنك الشراء كزائر، لكن إنشاء حساب يسهل عليك إدارة الطلبات في المستقبل.',
        },
      ],
    },
    {
      title: 'سسياسة الارجاع',
      questions: [
        {
          question: 'كيف يمكنني تتبع طلباتي ؟',
          answer: 'بعد تأكيد الطلب، ستتلقى بريدًا إلكترونيًا يحتوي على معلومات التتبع.',
        },
        {
          question: 'ماذا افعل اذا لم استلم طلبي بالوقت المحدد ؟',
          answer: 'يمكنك الاتصال بخدمة العملاء للتحقق من حالة الطلب.',
        },
      ],
    },


    {
      title: 'الأسئلة المتعلقة بالخصوصية والأمان',
      questions: [
        {
          question: 'هل يمكنني تعديل أو الغاء طلبي بعد تقديمه ؟',
          answer: 'يمكنك تعديل أو إلغاء الطلب خلال 24 ساعة من تقديمه، إذا لم يتم شحنه بعد..',
        },
        {
          question: 'ماذا افعل اذا استلمت منتجا خاطئا ؟',
          answer: 'يرجى التواصل مع خدمة العملاء، وسنقوم بحل المشكلة بأسرع وقت.',
        },{
          question: 'هل هناك حد تدنى لقيمة الطلب ؟',
          answer: 'لا يوجد حد أدنى لقيمة الطلب، يمكنك شراء ما يناسبك.',
        },{
          question: 'ماهي سياسة الارجاع ؟',
          answer: 'يمكنك إرجاع المنتجات خلال 14 يومًا من استلامها، بشرط أن تكون في حالتها الأصلية.',
        },{
          question: 'هل يمكنني استرداد المبلغ بعد الارجاع ؟',
          answer: 'نعم، سيتم استرداد المبلغ بنفس طريقة الدفع التي استخدمتها عند الشراء.',
        },
      ],
    },
  ];

  const handleToggle = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleScroll = () => {
    if (progressRef.current) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      progressRef.current.style.height = `${scrollPercentage}%`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-[#000112] flex justify-center relative" dir="rtl">
      <div ref={progressRef} className="absolute left-0 top-0 w-1 bg-gradient-to-b from-white to-transparent" style={{ height: '0%' }}></div>
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-5xl font-bold mb-6 text-white py-8">الأسئلة الشائعة</h1>
        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="text-white p-4 mb-4" style={{ backgroundColor: '#1a1c24' }}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.questions.map((item, index) => (
                  <div key={index} className="rounded-lg p-4">
                    <div
                      className="text-xl font-semibold text-white cursor-pointer flex items-center justify-between"
                      onClick={() => handleToggle(index)}
                      aria-expanded={activeIndexes.includes(index)}
                    >
                      <span>{item.question}</span>
                      <span>
                        {activeIndexes.includes(index) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.646 9.646a.5.5 0 0 1 .708 0L8 12.293l3.646-3.647a.5.5 0 1 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.646 6.354a.5.5 0 0 1 .708 0L8 3.707l3.646 3.647a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708z" />
                          </svg>
                        )}
                      </span>
                    </div>
                    {activeIndexes.includes(index) && (
                      <div className="text-base text-white leading-loose mt-2">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
