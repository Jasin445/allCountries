

export default function BoxShadow ({padding, width, minWidth, children, ...props}: any){
    return  <div  {...props}>
        {children}
</div>
}