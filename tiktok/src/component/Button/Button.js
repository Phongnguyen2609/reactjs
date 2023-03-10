import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
/*
    to:     + link nội bộ
    href:   + link sang trang web khác
*/
function Button({
    to,
    href,
    disabled,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    children,
    // muốn custom class riêng thì thêm className
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // handle click events
    // chỉ có mỗi lắng nghe sự kiện thì mới bắt đầu = 'on'
    if (disabled) {
        // Nếu là disabled thì sẽ xóa đi prop on click
        // delete props.onClick;

        // xóa lắng nghe sự kiện khi btn là disabled
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    /*
        khi nào prop được truyền thì nó sẽ add thêm class
    */
    const classes = cx('wrapper', {
        disabled,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        // khi có className thì nó sẽ lấy giá trị của className làm [key] : value
        // rồi sang chỗ muốn custom riêng thêm class bình thường
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
