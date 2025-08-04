import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle, Upload, Video, Send, Sun, Camera, Zap, Files, TrendingUp, UserCheck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import videoTemplate1 from "@/assets/video-template-1.jpg";
import videoTemplate2 from "@/assets/video-template-2.jpg";
import videoTemplate3 from "@/assets/video-template-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary py-12">
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
            <div className="max-w-4xl mx-auto space-y-4 border border-gray-200 rounded-2xl p-8 bg-white/50">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight whitespace-nowrap">
                  Tăng cơ hội ứng tuyển{" "}
                  <span className="text-primary font-black">x2 với video 30s</span>
                </h1>
                <p className="text-xl text-muted-foreground font-semibold">
                  CÓ GÌ HẤP DẪN?
                </p>
                <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-4 max-w-4xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Files className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    Hồ sơ <span className="font-bold text-primary text-2xl">nổi bật</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Gây ấn tượng mạnh ngay từ đầu</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    Được <span className="font-bold text-primary text-2xl">ưu tiên</span> xem trước
                  </div>
                  <p className="text-sm text-muted-foreground">Được xem đầu tiên trong danh sách</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-lg font-semibold text-foreground whitespace-nowrap">
                    Được <span className="font-bold text-primary text-2xl">đánh giá cao</span> bởi NTD
                  </div>
                  <p className="text-sm text-muted-foreground">Tạo niềm tin với nhà tuyển dụng</p>
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
                  onClick={() => window.open('https://www.vieclamtot.com/tags/viec-lam-doi-tac', '_blank')}
                >
                  Ứng tuyển ngay
                </Button>
              </div>

              <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic text-center whitespace-nowrap">
                <span className="font-bold">Video của bạn được bảo mật 100%</span> - Chỉ nhà tuyển dụng được xác minh mới có thể được xem. Không chia sẻ công khai dữ liệu của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Steps Section */}
      <section className="pt-0 pb-2 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Hướng dẫn quay video CV ứng tuyển
            </h2>
          </div>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="steps">Các bước thực hiện</TabsTrigger>
              <TabsTrigger value="tips">Mẹo quay video</TabsTrigger>
            </TabsList>
            
            <TabsContent value="steps" className="space-y-8">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Bước 1: Nhấn vào phần ứng tuyển',
                    description: "Nhấn vào phần 'Ứng tuyển' trên việc làm",
                    imageUrl: "/lovable-uploads/c3e93334-7a89-41f2-b7ba-148f700559ae.png"
                  },
                  {
                    title: "Bước 2: Chọn vào mục quay video",
                    description: "Chọn vào mục quay video trong form ứng tuyển",
                    imageUrl: "/lovable-uploads/bab96a0c-b5ff-493d-be02-1e4132881c4a.png"
                  },
                  {
                    title: "Bước 3: Quay video theo hướng dẫn",
                    description: "Quay video theo hướng dẫn",
                    imageUrl: "https://images.unsplash.com/photo-1492552181161-62217fc3076d?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Bước 4: Gửi video ứng tuyển",
                    description: "Gửi video ứng tuyển và chờ phản hồi từ nhà tuyển dụng",
                    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
                  }
                ].map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={step.imageUrl} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
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
      <section id="video-templates" className="pt-20 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Cảm hứng từ những video CV xuất sắc
            </h2>
            <p className="text-lg text-muted-foreground">
              Xem các mẫu video thành công để tạo cảm hứng cho video của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: videoTemplate1,
                title: "Nhân viên kinh doanh",
                link: "#"
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
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {template.title}
                    </h3>
                  </div>
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

      {/* Jobs Section */}
      <section className="pt-8 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Những công việc phù hợp với bạn
            </h2>
            <p className="text-lg text-muted-foreground">
              Khám phá các cơ hội việc làm hấp dẫn từ các đối tác của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Nhân viên kinh doanh",
                company: "Công ty ABC",
                salary: "8-15 triệu",
                location: "Hà Nội"
              },
              {
                title: "Chăm sóc khách hàng",
                company: "Công ty XYZ", 
                salary: "7-12 triệu",
                location: "TP.HCM"
              },
              {
                title: "Telesales",
                company: "Công ty DEF",
                salary: "6-10 triệu",
                location: "Đà Nẵng"
              }
            ].map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="text-sm">{job.company}</p>
                      <p className="text-sm font-medium text-primary">{job.salary}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open('https://www.vieclamtot.com/tags/viec-lam-doi-tac', '_blank')}
            >
              Xem tất cả việc làm đối tác
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80"
                alt="Professional job seeker in business attire"
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Bạn có thắc mắc?
              </h2>
              <p className="text-base text-muted-foreground">
                Nếu bạn có câu hỏi khác hoặc cần hỗ trợ thêm, vui lòng liên hệ đội ngũ hỗ trợ của chúng tôi.
              </p>
              <div className="flex gap-4">
                <Button variant="default" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
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