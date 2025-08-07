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
  const [playingVideo, setPlayingVideo] = useState<{section: 'desktop' | 'mobile', index: number} | null>(null);
  
  const handlePlayVideo = (index: number, section: 'desktop' | 'mobile') => {
    console.log('Playing video index:', index, 'section:', section);
    setPlayingVideo({section, index});
  };
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
  const [emblaRefVideos, emblaApiVideos] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false
  });
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  // Update selected index when embla scrolls
  const onStepSelect = () => {
    if (!emblaApiSteps) return;
    setSelectedStepIndex(emblaApiSteps.selectedScrollSnap());
  };

  const onTipSelect = () => {
    if (!emblaApiTips) return;
    setSelectedTipIndex(emblaApiTips.selectedScrollSnap());
  };

  const onVideoSelect = () => {
    if (!emblaApiVideos) return;
    setSelectedVideoIndex(emblaApiVideos.selectedScrollSnap());
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

  useEffect(() => {
    if (emblaApiVideos) {
      emblaApiVideos.on('select', onVideoSelect);
      onVideoSelect(); // Set initial index
    }
  }, [emblaApiVideos]);

  const stepsData = [
    {
      title: 'Bước 1: Chọn "Quay video"',
      description: "Chọn vào mục quay video trong form ứng tuyển",
      imageUrl: "/lovable-uploads/1f9a4da4-b75b-48af-8027-f348618e5049.png"
    },
    {
      title: "Bước 2: Quay video theo hướng dẫn",
      description: "Quay video theo hướng dẫn",
      imageUrl: "/lovable-uploads/92cc15d1-816a-41ad-8404-cf6775f288f5.png"
    },
    {
      title: "Bước 3: Gửi video ứng tuyển",
      description: "Gửi video ứng tuyển và chờ phản hồi từ nhà tuyển dụng",
      imageUrl: "/lovable-uploads/2f9654a5-8657-44ef-a085-c25490d1b55e.png"
    },
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
                src="/lovable-uploads/3134aade-f13c-4349-97d5-026f147f0bb9.png" 
                alt="Professional creating video CV" 
                className="rounded-2xl w-full h-48 object-cover bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto space-y-4 border border-gray-200 rounded-2xl p-4 md:p-8 bg-white/50">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                  Hồ sơ có video được{" "}
                  <span className="text-primary font-black">ưu tiên xem đầu tiên</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-semibold">
                  Tăng cơ hội ứng tuyển x2 với video 30s
                </p>
                <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
              </div>
              
              {/* Desktop version */}
              <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6 py-4 max-w-4xl mx-auto">
                <div className="text-center space-y-2 md:space-y-4 group animate-fade-in">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Files className="h-6 w-6 md:h-8 md:w-8 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Hồ sơ <span className="font-bold text-primary text-lg md:text-2xl">nổi bật</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Gây ấn tượng mạnh ngay từ đầu</p>
                </div>
                <div className="text-center space-y-2 md:space-y-4 group animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-lg md:text-2xl">ưu tiên</span> xem trước
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">90% hồ sơ có video được xem đầu tiên</p>
                </div>
                <div className="text-center space-y-2 md:space-y-4 group animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-lg md:text-2xl">đánh giá cao</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Hồ sơ có video được gọi ngay trong vòng 24H</p>
                </div>
              </div>

              {/* Mobile version - show all 3 in grid */}
              <div className="md:hidden py-4 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-3">
                  <div className="text-center space-y-2 p-3 bg-white/30 rounded-lg border border-white/20 group animate-fade-in transition-all duration-300 hover:bg-white/50 hover:scale-[1.02]">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                      <Files className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Hồ sơ <span className="font-bold text-primary">nổi bật</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Gây ấn tượng mạnh ngay từ đầu</p>
                  </div>
                  <div className="text-center space-y-2 p-3 bg-white/30 rounded-lg border border-white/20 group animate-fade-in transition-all duration-300 hover:bg-white/50 hover:scale-[1.02]" style={{animationDelay: '0.2s'}}>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                      <TrendingUp className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Được <span className="font-bold text-primary">ưu tiên</span> xem trước
                    </div>
                    <p className="text-xs text-muted-foreground">90% hồ sơ có video được xem đầu tiên</p>
                  </div>
                  <div className="text-center space-y-2 p-3 bg-white/30 rounded-lg border border-white/20 group animate-fade-in transition-all duration-300 hover:bg-white/50 hover:scale-[1.02]" style={{animationDelay: '0.4s'}}>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                      <UserCheck className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110 animate-blink" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Được <span className="font-bold text-primary">đánh giá cao</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Hồ sơ có video được gọi ngay trong vòng 24H</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button variant="ctaBlue" size="lg" className="w-full md:w-auto">
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

          {/* Desktop version */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                image: "https://drive.google.com/thumbnail?id=1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu",
                title: "Nhân viên kinh doanh",
                videoUrl: "https://drive.google.com/file/d/1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu/preview",
                stats: [
                  "✅ Được 6 NTD liên hệ",
                  "⚡ Làm việc ngay sau 24H đăng tải",
                  "🎯 Lương 15-18 triệu/tháng"
                ]
              },
              {
                image: videoTemplate2,
                title: "Chăm sóc khách hàng",
                videoUrl: null,
                stats: [
                  "✅ Được 8 NTD quan tâm", 
                  "⚡ Có việc làm sau 3 ngày",
                  "🎯 Mức lương 12-16 triệu"
                ]
              },
              {
                image: videoTemplate3,
                title: "Telesales",
                videoUrl: null,
                stats: [
                  "✅ Được 12 NTD liên hệ",
                  "⚡ Nhận offer sau 1 tuần", 
                  "🎯 Thu nhập 20-25 triệu"
                ]
              }
            ].map((template, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  {playingVideo?.section === 'desktop' && playingVideo?.index === index && template.videoUrl ? (
                    <div className="w-full h-48 rounded-lg bg-white flex items-center justify-center">
                      <iframe
                        src={template.videoUrl}
                        className="w-full h-full rounded-lg"
                        allow="encrypted-media; fullscreen"
                        allowFullScreen
                        frameBorder="0"
                        title={template.title}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {template.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => handlePlayVideo(index, 'desktop')}
                            className="bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                          >
                            <Play className="h-6 w-6 fill-current" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {template.title}
                    </h3>
                    <div className="space-y-2">
                      {template.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="text-xs">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile carousel version */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={emblaRefVideos}>
              <div className="flex">
                {[
                  {
                    image: "https://drive.google.com/thumbnail?id=1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu",
                    title: "Nhân viên kinh doanh",
                    videoUrl: "https://drive.google.com/file/d/1cv3B-DmfnaAulF5J3rx7RyUxi4oPngVu/preview",
                    stats: [
                      "✅ Được 6 NTD liên hệ",
                      "⚡ Làm việc ngay sau 24H đăng tải",
                      "🎯 Lương 15-18 triệu/tháng"
                    ]
                  },
                  {
                    image: videoTemplate2,
                    title: "Chăm sóc khách hàng",
                    videoUrl: null,
                    stats: [
                      "✅ Được 8 NTD quan tâm", 
                      "⚡ Có việc làm sau 3 ngày",
                      "🎯 Mức lương 12-16 triệu"
                    ]
                  },
                  {
                    image: videoTemplate3,
                    title: "Telesales",
                    videoUrl: null,
                    stats: [
                      "✅ Được 12 NTD liên hệ",
                      "⚡ Nhận offer sau 1 tuần", 
                      "🎯 Thu nhập 20-25 triệu"
                    ]
                  }
                ].map((template, index) => (
                  <div key={index} className="flex-[0_0_85%] min-w-0 pl-4">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <div className="relative overflow-hidden">
                        {playingVideo?.section === 'mobile' && playingVideo?.index === index && template.videoUrl ? (
                          <iframe
                            src={template.videoUrl}
                            className="w-full h-48 rounded-lg"
                            allow="encrypted-media; fullscreen"
                            allowFullScreen
                            frameBorder="0"
                            title={template.title}
                          />
                        ) : (
                          <div className="relative">
                            <img 
                              src={template.image} 
                              alt={template.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            {template.videoUrl && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                  onClick={() => handlePlayVideo(index, 'mobile')}
                                  className="bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                >
                                  <Play className="h-6 w-6 fill-current" />
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-foreground">
                            {template.title}
                          </h3>
                          <div className="space-y-2">
                            {template.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="flex items-center text-sm text-muted-foreground">
                                <span className="text-xs">{stat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedVideoIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    if (emblaApiVideos) {
                      emblaApiVideos.scrollTo(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <Button 
              variant="ctaBlue" 
              size="lg"
              className=""
            >
              <Play className="mr-2 h-5 w-5" />
              Bắt đầu tạo video ngay →
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="pt-0 pb-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Hướng dẫn quay video CV ứng tuyển
            </h2>
          </div>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-transparent border border-gray-200 p-1">
              <TabsTrigger value="steps" className="data-[state=active]:bg-[#306BD9]/10 data-[state=active]:text-[#306BD9] data-[state=active]:border-[#306BD9] text-gray-600 border-transparent">Các bước thực hiện</TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-[#306BD9]/10 data-[state=active]:text-[#306BD9] data-[state=active]:border-[#306BD9] text-gray-600 border-transparent">Mẹo quay video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="steps" className="space-y-6">
              {/* Desktop version */}
              <div className="hidden md:grid grid-cols-3 gap-3 md:gap-4">
                {stepsData.map((step, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-3 space-y-2">
                      <div className="w-full h-40 bg-white rounded-lg overflow-hidden mb-2 border">
                        <img 
                          src={step.imageUrl} 
                          alt={step.title}
                          className="w-full h-full object-contain"
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
                            <div className="w-full h-40 bg-white rounded-lg overflow-hidden mb-3 border">
                              <img 
                                src={step.imageUrl} 
                                alt={step.title}
                                className="w-full h-full object-contain"
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
      <section className="py-6 pb-8 bg-white">
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
                title: "TÂN BÌNH-NHÂN VIÊN NHẮC PHÍ KHÔNG Y/C KINH NGHIỆM",
                company: "CÔNG TY TÀI CHÍNH TNHH NGÂN HÀNG VIỆT NAM THỊNH VƯỢNG SMBC",
                salary: "Đến 25 triệu/tháng",
                location: "Quận Bình Tân, Tp Hồ Chí Minh",
                timePosted: "1 giờ trước",
                contacts: "90 Liên Hệ",
                logo: "https://cdn.chotot.com/fT90uMZtlZS51c47eKC35e9_BcRSwnGzaDpZ43Fs-yI/preset:listing/plain/496f5cd47c0cbd4f129bb295fe20b166-2925833250166481805.jpg",
                link: "https://www.vieclamtot.com/viec-lam-quan-binh-tan-tp-ho-chi-minh/126511680.htm",
                benefits: ["💰 Lương tốt", "🛡️ Bảo hiểm", "🎁 Thưởng lễ/tết"]
              },
              {
                title: "Tuyển 01 Kế Toán Viên tại Bình Tân - Tân Phú", 
                company: "Công ty P.S",
                salary: "Đến 14 triệu/tháng",
                location: "Quận Bình Tân, Tp Hồ Chí Minh",
                timePosted: "1 giờ trước",
                contacts: "31 Liên Hệ",
                logo: "https://cdn.chotot.com/XmROlkdlQmJuwTU2bwUNUGmszWPsYXrOhtDJtz25ULs/preset:listing/plain/be35234b64c5f81e81018e7038b363d6-2902200591672197914.jpg",
                link: "https://www.vieclamtot.com/viec-lam-quan-binh-tan-tp-ho-chi-minh/126378659.htm",
                benefits: []
              },
              {
                title: "Nhân Viên Tư Vấn - Sales - Thu Nhập Trên 10 Triệu",
                company: "CÔNG TY TNHH TRUNG TÂM THỂ DỤC THỂ HÌNH & YOGA CALIFORNIA",
                salary: "Đến 20 triệu/tháng",
                location: "Thành phố Thủ Dầu Một, Bình Dương",
                timePosted: "2 giờ trước",
                contacts: "18 Liên Hệ",
                logo: "https://cdn.chotot.com/XmROlkdlQmJuwTU2bwUNUGmszWPsYXrOhtDJtz25ULs/preset:listing/plain/be35234b64c5f81e81018e7038b363d6-2902200591672197914.jpg",
                link: "https://www.vieclamtot.com/viec-lam-thanh-pho-thu-dau-mot-binh-duong/126207504.htm",
                benefits: []
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
                        className="w-12 h-12 rounded-lg object-cover bg-white border"
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
                      
                      {/* Benefits */}
                      {job.benefits && job.benefits.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {job.benefits.map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      )}
                      
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
              variant="ctaBlue" 
              size="lg"
              className=""
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
                src="/lovable-uploads/1e6cd793-b002-4379-bd44-8ea941ae139f.png"
                alt="Việc Làm Tốt Logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg bg-white p-4"
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
                <Button 
                  variant="ctaBlue" 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={() => window.open('https://zalo.me/2147477147078814414', '_blank')}
                >
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