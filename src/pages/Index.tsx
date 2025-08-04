import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle, Upload, Video, Send, Sun, Camera, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import videoTemplate1 from "@/assets/video-template-1.jpg";
import videoTemplate2 from "@/assets/video-template-2.jpg";
import videoTemplate3 from "@/assets/video-template-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-12">
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
            <div className="max-w-4xl mx-auto space-y-8 border border-gray-200 rounded-2xl p-8 bg-white/50">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Tăng cơ hội ứng tuyển{" "}
                  <span className="text-primary">x2 với video 30s</span>
                </h1>
                <p className="text-xl text-muted-foreground font-semibold">
                  CÓ GÌ HẤP DẪN?
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">
                    Hồ sơ <span className="font-bold text-primary text-2xl">nổi bật</span> giữa hàng trăm ứng viên khác
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-2xl">ưu tiên</span> xem trước
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">
                    Nhà tuyển dụng <span className="font-bold text-primary text-2xl">đánh giá cao</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl">
                  <Play className="mr-2 h-5 w-5" />
                  Thử tạo video nhé
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => {
                    const videoSection = document.getElementById('video-templates');
                    videoSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Xem video mẫu
                </Button>
              </div>

              <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic text-left">
                Video của bạn được bảo mật 100% - Chỉ nhà tuyển dụng được xác minh mới có thể được xem. Không chia sẻ công khai dữ liệu của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Steps Section */}
      <section className="pt-12 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hướng dẫn quay video CV ứng tuyển
            </h2>
          </div>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="steps">Các bước thực hiện</TabsTrigger>
              <TabsTrigger value="tips">Mẹo quay video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="steps" className="space-y-8">
              <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: 'Nhấn vào phần "Ứng tuyển"',
                    description: "Nhấn vào phần 'Ứng tuyển' trên việc làm",
                    icon: Upload
                  },
                  {
                    title: "Chọn vào mục quay video",
                    description: "Chọn vào mục quay video trong form ứng tuyển",
                    icon: Video
                  },
                  {
                    title: "Quay video theo hướng dẫn",
                    description: "Quay video theo hướng dẫn chi tiết của hệ thống",
                    icon: Play
                  },
                  {
                    title: "Gửi video ứng tuyển",
                    description: "Gửi video ứng tuyển và chờ phản hồi từ nhà tuyển dụng",
                    icon: Send
                  }
                ].map((step, index) => (
                  <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                          <step.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tips" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Ánh sáng */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sun className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Ánh sáng</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Quay ở nơi có ánh sáng tự nhiên</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Tránh ngược sáng</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Dùng đèn LED nếu trong nhà tối</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Góc quay */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Góc quay</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Quay ở tầm mắt hoặc hơi cao</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Giữ máy thẳng, không nghiêng</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Để không gian đằng sau đẹp</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Kỹ thuật */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Kỹ thuật</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Nói chậm, rõ ràng</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mỉm cười tự nhiên</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Thời lượng 30-60 giây</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Templates Section */}
      <section id="video-templates" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mẫu video tham khảo
            </h2>
            <p className="text-xl text-muted-foreground">
              Xem các mẫu video thành công để tạo cảm hứng cho video của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: videoTemplate1,
                title: "Video giới thiệu chung",
                description: "Mẫu video giới thiệu bản thân và kinh nghiệm làm việc",
                link: "#"
              },
              {
                image: videoTemplate2,
                title: "Video phỏng vấn mẫu",
                description: "Cách trả lời câu hỏi phỏng vấn một cách chuyên nghiệp",
                link: "#"
              },
              {
                image: videoTemplate3,
                title: "Video hướng dẫn quay",
                description: "Hướng dẫn chi tiết cách quay video ấn tượng",
                link: "#"
              }
            ].map((template, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="lg">
                      <Play className="mr-2 h-5 w-5" />
                      Xem video
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {template.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {template.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Bắt đầu tạo video ngay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;