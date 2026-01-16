import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsappButton from '@/components/layout/whatsapp-button';
import ScrollToTopButton from '@/components/layout/scroll-to-top-button';
import CallButton from '@/components/layout/call-button';

export const metadata: Metadata = {
  title: 'JCC Career Consultancy',
  description: 'Forge your path to success with JCC Career Consultancy. We provide elite career coaching, resume mastery, and interview preparation to unlock your professional potential.',
  icons: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfASURBVHhe7Z0/aBNXFMejY2d7b8uFhBC2tBC2ECzFSiCWFkLpFBYsaGkspLQHFoJpLQgssLSwEgsLra3VFCxJ7VBoUloCJFpayr/gJCEH0klfMvP+zclldpNs8t7v3r333v2S/n5y8eWd+97kvffuFhGJRCIjkqH840AjkQjEIDIRiEESISIRCERkIhCIyEQgEJGJAERCJhCIyEQgEJGJAERCJgIREYhEZCISiEhEIBGRiUAikYlAJCISAUREJhCIyEQgEJGJAERCJgIREYhEZCISiEhEIBGRiUAikYlAJCISAUREJhCIyEQgEJGJAERCJgIREYhEZCISiEhEIBGRiUAikYlAZCb+Ly7e/mNvb+/L29vb7Yc7u9vb29/f//n5+eXj42Pf7vPz8+3t7e1jRSIREXk/kRk/+9fX14uXl5fF5eXl5v7+fr2+vt7v7+/fH3f5+PjY3NzcHJ6enhweHh4MDw/f7u/v7z/O7e3tr1+fN59IREGkXyKz/z4/P7/Z7+/vV2dnZ3N8fHxyeXm5uLi4+N23+vj42LzY29t7eHh4cHx8vL6+vrS2tra0srJy+3//93+X6+vr62/nFxcuXrx48caNd/715cuXX7347v+148d/u3Pnzq/e/ubfPn365M2bN7/b//d/v/nmm+u/efPmq9/+1bd/+/btmxv//nB37959880313/fvn27e/fu/eGvXbt2bWRkZOzbt2+vjIzMvPj9+/fvDw8Pv3nzR/r+QUREjA0ik7//8fFxrbe3dzI8PFweHh4Wd3Z2NjY21n7v7u7e2traWlpaWlpaWlpaWlpYXV3t/X69vb0tLCw8OTo62p4/evTozZs3L96++eabK7+jIyMjf/zxx9evX//v37//yMhIrbe3t7e3t7e3t7e3t7e394u//vXrv//+e3R09Pjx40dHR0dHR0dHR0dHR0e/efPmL7/8cvPkyZOnT58+efLkyZOnT58+f/78+fPnz68X1dXV7e3tNze/18jI6PHjxz/++ON///vfIyMjvb29tbW1/S9+RERkfiIz/8+fP6+vry+XlpZWVldXtra2tra2trbWftvf37+0tPTk8PDQPDw8LNbX19fX18fn5+fGx8cnJycnp6ampqampsbGxsbGxsbGxsbGxsbGxsbm5+fnx8fH+/v72/t1d3f38PBwfn5+cXFxcXFxcnJy8q9//ev3339/bGzsvffeGxsbm5qampqa/n/4X/zi8fExMTEREVGPIDL753NzcysrK39+8+bNN69f/fbk5OTExMSXX355cnJy8ubNm1e/fv3q1atX/6uuri4tLf3P/z988eLFf//73/v7+1taWlpbW1taWlpaWlpa2p4/derU0dHRo0eP/uuvv3716tXXr189efLkv/71r4mJiZe//e1vL7/88ve//z1+bERERLpEZv77+/vbu7u7W1tbmzN//vnnh4eHb7/9NjMzc7y9vd3d3V1fX/9vf/vb8PDw9evXf/vtt9evX58YGJidnR0dHW1v/uXLl4eHh29+MzAQ/zdhYWBgYHZ2tra2lvr7+729vYmJicnJyYmJicnJyYmJicnJycnJybm7u7u7u7u7u7u7t//OMfT58+fffdd0+ePHnhwoU3vvGNP//5zw8dOnT+/PnTpk2bOnXq9OnTJ0+ePHny5MkTJyZ/+MMfduzY8eijj3bt2vX555/v37/v1atX/z/iEyLScB9t8o8cOfLDDz/cuXPn1q1bp06dOnnyxPj4uKFDhxYWFnp6ejIzM5cuXXrx4sVnn3127tw59H4iRKSzPsY22qS/qVOnzpw58+abb8aNGzdw4MCPPvrI1tbW1tY2NDQ0MjJSVVXV1NR04sQJSqUiREREOm0jkW/ZsiUnJyc3N1dGRkZGRkZWVlZ6enrq6ur6+voKCgoSEhJSUlKUlJTU1NSUlJTk5ORkZGQUFBQUFBRkZGRkZGTExsYmJCTk5eVlZmZ26NAh2AkiItLHIpHv37//xIkT+/btm5iYmJ2dnZWVlZmZ2dq1awMDA8PCwtra2lpbW3t6ev78888zZ87ceeedX3/99U8++QQdTyQilkAk8hEREelkkcikU/j//u///T+hERERkYNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKSEZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkpJNAJLKREZEIkUgkIhCJTCQiEoFITCTSCURkfiIReX/u7u7u7u4uLi4sLCwsLCysra2tra0tLy9/5sz9q6ur6+vrf/vt34/Nf/zjHyMjIyMjI8uXL7+8vPzSpUuZmZmZmZllZWWlpaW5ubmpqampqanJyclZWVk//fRT+hUREem3iDSRkZER+YmI9EkkIiIiEhGJRCIiIhGJSERERCRSCERkIhCIyEQgIhKJRCISkYhEJBKRiEQkEolIJCISkchEIBGRiUAkIhKJRGQiEBGJRCIiEolEJiIRiUQikYlARIQSEQhEJBKIiEgkEolIJCIiEYlEJJKJRGQiEIlERCSSiUQkEolIRCSSiEQkEhGRSESESCQikYlARCKRiERkIhCRSCQSkYhEIhKJRGQiEBGISCQSkchEIBGJRCIikYlAJCISSUREIhKRSESEEIlIJBERkUhEIhKJSERERCIhkohEJBKRiEQkEhGRiEQkIhKJSEREkohEJBKRiEQkIhGJRERkIhAJRGQiEBGJSEREIhKJSEREJBKRiEQkEolEJBIRkUgkIhKJSEREJBIRCEREIhCRSCSSiEQkIhKJRGQiEBGJRCISSUREJBKRiEQkEhGRSEQkEhERkUgkEhGJRCIiEolEJBIRkUhERCIREYhEJGJJRKSrRGTe//Pnz3/49/f3X54/f/43L1++3NnZ2djY+PnkyZNN+/l/c3Nzcz/f/e7jX//58uXL9+/f//v379f/+f/7P3/+fM7v//z5w4/127dv//bNN5//148f/9X3f+fOnd/f//u//6u///3v3+7f39+7e/furVu3nj9/fvny5WfPn3/+44+3b9++ffv27du3j/yGiIj0m0k0ke/evXvv3r0LFixYvHjx0qVLFyxY8Pjjjz/66KPf/va3GzZseOzYsb/85S9ff/31Bx544B/+8AeE70dERKSPTSQSgYhIZCIRiEj/HxV09Jg2g19cAAAAAElFTkSuQmCC',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsappButton phoneNumber="+917987376854" />
          <CallButton phoneNumber="+916232586854" />
          <ScrollToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
