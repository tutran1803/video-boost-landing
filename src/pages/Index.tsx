import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, CheckCircle, Upload, Video, Send, Sun, Camera, Zap, Files, TrendingUp, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroImage from "@/assets/hero-image.jpg";
import videoTemplate1 from "@/assets/video-template-1.jpg";
import videoTemplate2 from "@/assets/video-template-2.jpg";
import videoTemplate3 from "@/assets/video-template-3.jpg";

const Index = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  const [emblaRefSteps, emblaApiSteps] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false
  });
  const [emblaRefTips, emblaApiTips] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false
  });
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);

  // Update selected index when embla scrolls
  const onStepSelect = () => {
    if (!emblaApiSteps) return;
    setSelectedStepIndex(emblaApiSteps.selectedScrollSnap());
  };

  const onTipSelect = () => {
    if (!emblaApiTips) return;
    setSelectedTipIndex(emblaApiTips.selectedScrollSnap());
  };

  // Set up scroll listener
  useEffect(() => {
    if (emblaApiSteps) {
      emblaApiSteps.on('select', onStepSelect);
      onStepSelect(); // Set initial index
    }
  }, [emblaApiSteps]);

  useEffect(() => {
    if (emblaApiTips) {
      emblaApiTips.on('select', onTipSelect);
      onTipSelect(); // Set initial index
    }
  }, [emblaApiTips]);

  const stepsData = [
    {
      title: 'Bước 1: Nhấn vào phần ứng tuyển',
      description: "Nhấn vào phần 'Ứng tuyển' trên việc làm",
      imageUrl: "/lovable-uploads/0bb0c934-c9df-4a0d-875f-074b77bff110.png"
    },
    {
      title: "Bước 2: Chọn vào mục quay video",
      description: "Chọn vào mục quay video trong form ứng tuyển",
      imageUrl: "/lovable-uploads/968c0488-03b1-40d9-a75e-05b8ece239a0.png"
    },
    {
      title: "Bước 3: Quay video theo hướng dẫn",
      description: "Quay video theo hướng dẫn",
      imageUrl: "/lovable-uploads/39d85a58-7b86-4914-b273-43826acb56e0.png"
    },
    {
      title: "Bước 4: Gửi video ứng tuyển",
      description: "Gửi video ứng tuyển và chờ phản hồi từ nhà tuyển dụng",
      imageUrl: "/lovable-uploads/2f9654a5-8657-44ef-a085-c25490d1b55e.png"
    }
  ];

  const tipsData = [
    {
      title: "Ánh sáng",
      icon: Sun,
      tips: [
        "Quay ở nơi có ánh sáng tự nhiên",
        "Tránh ngược sáng", 
        "Dùng đèn LED nếu trong nhà tối"
      ]
    },
    {
      title: "Góc quay",
      icon: Camera,
      tips: [
        "Quay ở tầm mắt hoặc hơi cao",
        "Giữ máy thẳng, không nghiêng",
        "Để không gian đằng sau đẹp"
      ]
    },
    {
      title: "Kỹ thuật", 
      icon: Zap,
      tips: [
        "Nói chậm, rõ ràng",
        "Mỉm cười tự nhiên",
        "Thời lượng 30-60 giây"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            {/* Hero Image */}
            <div className="relative max-w-2xl mx-auto">
              <img 
                src={heroImage} 
                alt="Professional creating video CV" 
                className="rounded-2xl shadow-2xl w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto space-y-4 border border-gray-200 rounded-2xl p-4 md:p-8 bg-white/50">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                  Tăng cơ hội ứng tuyển{" "}
                  <span className="text-primary font-black">x2 với video 30s</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-semibold">
                  CÓ GÌ HẤP DẪN?
                </p>
                <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
              </div>
              
              {/* Desktop version */}
              <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6 py-4 max-w-4xl mx-auto">
                <div className="text-center space-y-2 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Files className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Hồ sơ <span className="font-bold text-primary text-lg md:text-2xl">nổi bật</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Gây ấn tượng mạnh ngay từ đầu</p>
                </div>
                <div className="text-center space-y-2 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-lg md:text-2xl">ưu tiên</span> xem trước
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Được xem đầu tiên trong danh sách</p>
                </div>
                <div className="text-center space-y-2 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-lg md:text-2xl">đánh giá cao</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Tạo niềm tin với nhà tuyển dụng</p>
                </div>
              </div>

              {/* Mobile carousel version */}
              <div className="md:hidden py-4 max-w-4xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    <div className="flex-[0_0_80%] min-w-0 pl-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Files className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-base font-semibold text-foreground">
                          Hồ sơ <span className="font-bold text-primary text-lg">nổi bật</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Gây ấn tượng mạnh ngay từ đầu</p>
                      </div>
                    </div>
                    <div className="flex-[0_0_80%] min-w-0 pl-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-base font-semibold text-foreground">
                          Được <span className="font-bold text-primary text-lg">ưu tiên</span> xem trước
                        </div>
                        <p className="text-xs text-muted-foreground">Được xem đầu tiên trong danh sách</p>
                      </div>
                    </div>
                    <div className="flex-[0_0_80%] min-w-0 pl-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <UserCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-base font-semibold text-foreground">
                          Được <span className="font-bold text-primary text-lg">đánh giá cao</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Tạo niềm tin với nhà tuyển dụng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Thử tạo video nhé
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full md:w-auto"
                  onClick={() => window.open('https://www.vieclamtot.com/tags/viec-lam-doi-tac', '_blank')}
                >
                  Ứng tuyển ngay
                </Button>
              </div>

              <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic text-center px-4">
                <span className="font-bold">Video của bạn được bảo mật 100%</span> - Chỉ nhà tuyển dụng được xác minh mới có thể được xem. Không chia sẻ công khai dữ liệu của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Video Templates Section */}
      <section id="video-templates" className="pt-8 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Cảm hứng từ những video CV xuất sắc
            </h2>
            <p className="text-base text-muted-foreground">
              Xem các mẫu video thành công để tạo cảm hứng cho video của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                image: "https://drive.google.com/thumbnail?id=1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu",
                title: "Nhân viên kinh doanh",
                videoUrl: "https://drive.google.com/file/d/1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu/preview"
              },
              {
                image: videoTemplate2,
                title: "Chăm sóc khách hàng",
                link: "#"
              },
              {
                image: videoTemplate3,
                title: "Telesales",
                link: "#"
              }
            ].map((template, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  {playingVideo === index && template.videoUrl ? (
                    <iframe
                      src={template.videoUrl}
                      className="w-full h-48 rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {template.videoUrl ? (
                          <Button 
                            variant="hero" 
                            size="lg"
                            className="w-16 h-16 rounded-full p-0"
                            onClick={() => setPlayingVideo(index)}
                          >
                            <Play className="h-8 w-8" />
                          </Button>
                        ) : (
                          <Button 
                            variant="hero" 
                            size="lg"
                            className="w-16 h-16 rounded-full p-0"
                          >
                            <Play className="h-8 w-8" />
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {template.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              size="lg"
              className="text-primary border-primary hover:bg-primary/5"
            >
              <Play className="mr-2 h-5 w-5" />
              Bắt đầu tạo video ngay →
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pt-0 pb-2 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Hướng dẫn quay video CV ứng tuyển
            </h2>
          </div>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-transparent border border-gray-200 p-1">
              <TabsTrigger value="steps" className="data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:border-primary text-gray-600 border-transparent">Các bước thực hiện</TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:border-primary text-gray-600 border-transparent">Mẹo quay video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="steps" className="space-y-6">
              {/* Desktop version */}
              <div className="hidden md:grid grid-cols-4 gap-3 md:gap-4">
                {stepsData.map((step, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-3 space-y-2">
                      <div className="w-full h-16 bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={step.imageUrl} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile carousel version */}
              <div className="md:hidden">
                <div className="overflow-hidden" ref={emblaRefSteps}>
                  <div className="flex">
                    {stepsData.map((step, index) => (
                      <div key={index} className="flex-[0_0_85%] min-w-0 pl-4">
                        <Card className="border-0 shadow-md">
                          <CardContent className="p-4 space-y-3">
                            <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                              <img 
                                src={step.imageUrl} 
                                alt={step.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-center">
                              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {stepsData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedStepIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-gray-300'
                      }`}
                      onClick={() => {
                        if (emblaApiSteps) {
                          emblaApiSteps.scrollTo(index);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              {/* Desktop version */}
              <div className="hidden md:grid grid-cols-3 gap-3 md:gap-4">
                {tipsData.map((tip, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 space-y-3">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <tip.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">{tip.title}</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        {tip.tips.map((tipItem, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">{tipItem}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile carousel version */}
              <div className="md:hidden">
                <div className="overflow-hidden" ref={emblaRefTips}>
                  <div className="flex">
                    {tipsData.map((tip, index) => (
                      <div key={index} className="flex-[0_0_85%] min-w-0 pl-4">
                        <Card className="border-0 shadow-md">
                          <CardContent className="p-4 space-y-3">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <tip.icon className="h-6 w-6 text-primary" />
                              </div>
                              <h3 className="text-lg font-semibold text-foreground mb-3">{tip.title}</h3>
                            </div>
                            <ul className="space-y-2 text-muted-foreground">
                              {tip.tips.map((tipItem, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-2">
                                  <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-xs">{tipItem}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {tipsData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedTipIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-gray-300'
                      }`}
                      onClick={() => {
                        if (emblaApiTips) {
                          emblaApiTips.scrollTo(index);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-6 pb-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Những công việc phù hợp với bạn
            </h2>
            <p className="text-base text-muted-foreground">
              Khám phá các cơ hội việc làm hấp dẫn từ các đối tác của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-4 mb-8">
            {[
              {
                title: "Tuyển 01 Kế Toán Viên tại Bình Tân - Tân Phú",
                company: "Công ty P.S",
                salary: "Đến 13 triệu/tháng",
                location: "Quận Bình Tân, Tp Hồ Chí Minh",
                timePosted: "54 phút trước",
                contacts: "26 Liên Hệ",
                logo: "https://cdn.chotot.com/XmROlkdlQmJuwTU2bwUNUGmszWPsYXrOhtDJtz25ULs/preset:listing/plain/be35234b64c5f81e81018e7038b363d6-2902200591672197914.jpg",
                link: "https://www.vieclamtot.com/viec-lam-quan-binh-tan-tp-ho-chi-minh/126378659.htm"
              },
              {
                title: "Nhân Viên Tư Vấn - Sales - Thu Nhập Trên 10 Triệu", 
                company: "CÔNG TY TNHH TRUNG TÂM THỂ DỤC THỂ HÌNH & YOGA CALIFORNIA",
                salary: "Đến 20 triệu/tháng",
                location: "Thành phố Thủ Dầu Một, Bình Dương",
                timePosted: "1 giờ trước",
                contacts: "17 Liên Hệ",
                logo: "https://cdn.chotot.com/048jiR1Yakc4uceqPz22tZjhNuWSB0sALGLrqzMImA4/preset:listing/plain/50e7e6c8460ccb5a848eab0ec7a0ea14-2924517665586887902.jpg",
                link: "https://www.vieclamtot.com/viec-lam-thanh-pho-thu-dau-mot-binh-duong/126207504.htm"
              },
              {
                title: "NV Kinh Doanh online tại Bình Tân - Tân Phú",
                company: "Công ty P.S",
                salary: "Đến 16 triệu/tháng",
                location: "Quận Bình Tân, Tp Hồ Chí Minh",
                timePosted: "1 giờ trước",
                contacts: "32 Liên Hệ",
                logo: "https://cdn.chotot.com/XmROlkdlQmJuwTU2bwUNUGmszWPsYXrOhtDJtz25ULs/preset:listing/plain/be35234b64c5f81e81018e7038b363d6-2902200591672197914.jpg",
                link: "https://www.vieclamtot.com/viec-lam-quan-binh-tan-tp-ho-chi-minh/126374988.htm"
              }
            ].map((job, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 group bg-white cursor-pointer"
                onClick={() => window.open(job.link, '_blank')}
              >
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <img 
                        src={job.logo} 
                        alt={job.company}
                        className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">
                          🔥 Đối Tác
                        </span>
                      </div>
                      
                      <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                      
                      <p className="text-sm font-semibold text-red-600 mb-2">{job.salary}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">📍 {job.location}</span>
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-400 space-x-4">
                        <span>{job.timePosted}</span>
                        <span>•</span>
                        <span>{job.contacts}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="text-primary border-primary hover:bg-primary/5"
              onClick={() => window.open('https://www.vieclamtot.com/tags/viec-lam-doi-tac', '_blank')}
            >
              Xem tất cả việc làm đối tác →
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8 md:py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80"
                alt="Professional job seeker in business attire"
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                Bạn có thắc mắc?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Nếu bạn có câu hỏi khác hoặc cần hỗ trợ thêm, vui lòng liên hệ đội ngũ hỗ trợ của chúng tôi.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button variant="default" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
                  Liên hệ Zalo Việc Làm Tốt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;