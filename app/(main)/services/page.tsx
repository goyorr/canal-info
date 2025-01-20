import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from 'lucide-react'

const services = [
  {
    title: "Web Design",
    description: "Custom, responsive websites tailored to your brand and business needs.",
    price: "$999+"
  },
  {
    title: "E-commerce Solutions",
    description: "Fully-featured online stores with secure payment gateways and inventory management.",
    price: "$1499+"
  },
  {
    title: "SEO Optimization",
    description: "Boost your online presence and climb search engine rankings.",
    price: "$499/month"
  },
  {
    title: "Content Creation",
    description: "Engaging, SEO-friendly content to attract and retain customers.",
    price: "$299/page"
  },
  {
    title: "Web Design",
    description: "Custom, responsive websites tailored to your brand and business needs.",
    price: "$999+"
  },
  {
    title: "E-commerce Solutions",
    description: "Fully-featured online stores with secure payment gateways and inventory management.",
    price: "$1499+"
  },
  {
    title: "SEO Optimization",
    description: "Boost your online presence and climb search engine rankings.",
    price: "$499/month"
  },
  {
    title: "Content Creation",
    description: "Engaging, SEO-friendly content to attract and retain customers.",
    price: "$299/page"
  }
]

export default function EcommerceServices() {
  return (
    <div className="mt-10">
      <header className="shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl flex justify-center items-center font-bold text-white">Our Services</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Contact for Inquiry
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

