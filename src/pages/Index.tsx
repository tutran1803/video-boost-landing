import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, CheckCircle, Upload, Video, Send } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hồ sơ có video được{" "}
                  <span className="text-primary">ưu tiên xem đầu tiên</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Tạo video CV để nổi bật hơn với nhà tuyển dụng
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">Được xem đầu tiên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4h</div>
                  <div className="text-sm text-muted-foreground">Được đánh giá cao</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100k+</div>
                  <div className="text-sm text-muted-foreground">Nổi bật</div>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="hero" size="xl" className="w-full lg:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  THỬ TẠO VIDEO - NHẬN 100K VOUCHER
                </Button>
                <Button variant="outline" size="lg" className="w-full lg:w-auto">
                  Xem video mẫu
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Video của bạn được bảo mật 100% - Chỉ nhà tuyển dụng được xác minh mới có thể được xem. 
                Không chia sẻ công khai dữ liệu của bạn.
              </p>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional creating video CV" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tăng cơ hội X2 với video 30s
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Hồ sơ nổi bật giữa hàng trăm ứng viên khác
                </h3>
                <p className="text-muted-foreground">
                  Video giúp bạn thu hút sự chú ý và tạo ấn tượng mạnh mẽ với nhà tuyển dụng
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Hồ sơ có video được ưu tiên xem trước
                </h3>
                <p className="text-muted-foreground">
                  90% hồ sơ có video được xem đầu tiên trong danh sách ứng viên
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Nhà tuyển dụng đánh giá cao hồ sơ có video
                </h3>
                <p className="text-muted-foreground">
                  Thể hiện sự chuyên nghiệp và tính năng động qua video giới thiệu
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="cta" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Thử quay video
            </Button>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              Video của bạn được bảo mật 100% - Chỉ nhà tuyển dụng được xác minh mới có thể được xem. 
              Không chia sẻ công khai dữ liệu của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Các bước để quay video
            </h2>
            <p className="text-xl text-muted-foreground">
              Chỉ cần 4 bước đơn giản để tạo video ứng tuyển chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Nhấn vào phần "Ứng tuyển"',
                description: "Nhấn vào phần 'Ứng tuyển' trên việc làm",
                icon: Upload
              },
              {
                step: 2,
                title: "Chọn vào mục quay video",
                description: "Chọn vào mục quay video trong form ứng tuyển",
                icon: Video
              },
              {
                step: 3,
                title: "Quay video theo hướng dẫn",
                description: "Quay video theo hướng dẫn chi tiết của hệ thống",
                icon: Play
              },
              {
                step: 4,
                title: "Gửi video ứng tuyển",
                description: "Gửi video ứng tuyển và chờ phản hồi từ nhà tuyển dụng",
                icon: Send
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Bước {step.step}
                    </h3>
                    <h4 className="text-md font-medium text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Templates Section */}
      <section className="py-20 bg-background">
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
                  <Button variant="outline" className="w-full">
                    Xem chi tiết
                  </Button>
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