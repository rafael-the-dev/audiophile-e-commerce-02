import classNames from 'classnames'

const Container = ({ className, inputClassName, label, placeholder, type="text" }) => {
    return (
        <div className={classNames("flex flex-col items-stretch mb-6", className)}>
            <label className="font-bold">{ label }</label>
            <input 
                className={classNames(`border border-solid border-gray-300 mt-3 rounded-md 
                text-slate-300 px-3 py-4 focus-within:border-brown-500 outline-none`, inputClassName)}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

export default Container;