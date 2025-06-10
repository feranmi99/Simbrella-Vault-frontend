import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-600 text-white hover:bg-indigo-700",
        secondary:
          "border-transparent bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
        destructive:
          "border-transparent bg-rose-600 text-white hover:bg-rose-700",
        outline: 
          "border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
        premium:
          "border-transparent bg-gradient-to-r from-amber-500 to-pink-500 text-white",
        success:
          "border-transparent bg-green-600 text-white hover:bg-green-700",
        warning:
          "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        info:
          "border-transparent bg-blue-500 text-white hover:bg-blue-600"
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }