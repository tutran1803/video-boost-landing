import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Building, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  url: string;
}

export const LatestJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchLatestJobs();
  }, []);

  const fetchLatestJobs = async () => {
    try {
      // For now, use fallback data since edge function needs proper setup
      const fallbackJobs = [
        {
          title: "Nhân viên kinh doanh",
          company: "Công ty TNHH ABC",
          location: "Hà Nội",
          salary: "15-18 triệu",
          url: "https://www.vieclamtot.com/tags/viec-lam-doi-tac"
        },
        {
          title: "Chăm sóc khách hàng",
          company: "Công ty XYZ",
          location: "TP.HCM",
          salary: "12-16 triệu",
          url: "https://www.vieclamtot.com/tags/viec-lam-doi-tac"
        },
        {
          title: "Telesales",
          company: "Công ty DEF",
          location: "Đà Nẵng",
          salary: "20-25 triệu",
          url: "https://www.vieclamtot.com/tags/viec-lam-doi-tac"
        }
      ];
      setJobs(fallbackJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Lỗi",
        description: "Không thể tải danh sách việc làm mới nhất",
        variant: "destructive"
      });
      
      // Fallback data is already set above
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {jobs.map((job, index) => (
        <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
          <CardContent className="p-4 space-y-3">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {job.title}
              </h3>
              
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{job.company}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <DollarSign className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate font-medium text-primary">{job.salary}</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3"
              onClick={() => window.open(job.url, '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Xem chi tiết
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};