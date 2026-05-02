"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function ReflectionTool() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Bạn cảm thấy có một sự thôi thúc nội tâm mạnh mẽ hướng về Thiên Chúa và những điều tốt lành?",
      options: [
        { text: "Có, rất rõ ràng", value: 1 },
        { text: "Thỉnh thoảng", value: 0 },
        { text: "Không, tôi thấy khô khan", value: -1 }
      ]
    },
    {
      question: "Bạn có cảm thấy bình an sâu thẳm ngay cả khi gặp khó khăn thử thách?",
      options: [
        { text: "Có, một sự bình an khó tả", value: 1 },
        { text: "Tôi hay lo âu", value: -1 },
        { text: "Bình thường", value: 0 }
      ]
    },
    {
      question: "Suy nghĩ của bạn hiện tại dẫn bạn đến việc yêu thương người khác hay tập trung vào bản thân?",
      options: [
        { text: "Hướng tới tha nhân và bác ái", value: 1 },
        { text: "Tập trung vào bản thân, dễ bực dọc", value: -1 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    setScore(score + value);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setScore(0);
  };

  return (
    <div className="my-12 bg-parchment-dark border border-gold/30 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-6">
        <h3 
          className="text-xl sm:text-2xl font-bold text-burgundy mb-2"
          style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
        >
          Công Cụ Phản Tỉnh Thiêng Liêng
        </h3>
        <p className="text-sm text-text-muted italic max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>
          Một bài tự vấn ngắn giúp bạn nhận diện trạng thái tâm hồn hiện tại theo tinh thần Linh thao.
        </p>
      </div>

      {step < questions.length ? (
        <div className="max-w-xl mx-auto">
          <div className="mb-4 flex items-center justify-between text-xs text-text-muted font-medium uppercase tracking-wider">
            <span>Câu hỏi {step + 1} / {questions.length}</span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div key={i} className={`h-1 w-6 rounded-full ${i <= step ? 'bg-burgundy' : 'bg-gold-muted'}`} />
              ))}
            </div>
          </div>
          
          <h4 className="text-lg text-text-primary mb-6 font-medium">
            {questions[step].question}
          </h4>
          
          <div className="space-y-3">
            {questions[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.value)}
                className="w-full flex items-center gap-3 p-4 rounded-lg border border-border-light bg-parchment hover:border-gold hover:bg-gold-muted/50 transition-all text-left"
              >
                <Circle size={18} className="text-gold flex-shrink-0" />
                <span className="text-text-secondary">{opt.text}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-burgundy/10 mb-4">
            <CheckCircle2 size={32} className="text-burgundy" />
          </div>
          
          <h4 className="text-xl font-bold text-burgundy mb-4">Kết Quả Phản Tỉnh</h4>
          
          <div className="p-5 rounded-lg bg-parchment border border-gold/20 mb-6 text-left">
            {score > 0 ? (
              <>
                <p className="text-text-primary mb-3"><strong>Trạng thái: An Ủi Thiêng Liêng (Consolation)</strong></p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Tâm hồn bạn dường như đang được dẫn dắt bởi Thần Khí Tốt lành. Thánh I-nhã khuyên bạn hãy củng cố những quyết định tốt đẹp trong lúc này, nhưng cũng khiêm nhường chuẩn bị cho những lúc sầu khổ có thể đến, bằng cách tích lũy năng lượng thiêng liêng.
                </p>
              </>
            ) : score < 0 ? (
              <>
                <p className="text-text-primary mb-3"><strong>Trạng thái: Sầu Khổ Thiêng Liêng (Desolation)</strong></p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Bạn có thể đang trải qua sự sầu khổ thiêng liêng. Theo Quy tắc Tuần 1, Thánh I-nhã khuyên: "Tuyệt đối không thay đổi quyết định, mà hãy kiên định với những gì đã chọn trước khi sầu khổ đến." Hãy cầu nguyện nhiều hơn và tin tưởng Thiên Chúa sẽ ban lại bình an.
                </p>
              </>
            ) : (
              <>
                <p className="text-text-primary mb-3"><strong>Trạng thái: Bình Lặng / Chuyển Tiếp</strong></p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Tâm hồn bạn đang ở trạng thái khá quân bình hoặc không rõ rệt. Đây là thời điểm tốt để tiếp tục quan sát sự chuyển động của các thần khí. Hãy lưu ý xem các ý tưởng đưa bạn đến đích điểm nào: tốt đẹp hoàn toàn hay có một sự xáo trộn nhỏ? (Áp dụng Quy tắc Tuần 2).
                </p>
              </>
            )}
          </div>
          
          <button
            onClick={reset}
            className="px-6 py-2 rounded-full bg-burgundy text-parchment text-sm font-medium hover:bg-burgundy-dark transition-colors"
          >
            Làm lại bài tự vấn
          </button>
        </div>
      )}
    </div>
  );
}
