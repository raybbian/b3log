import {
    FaBoltLightning,
    FaCheck,
    FaCircleCheck,
    FaCircleInfo,
    FaFireFlameCurved, FaList,
    FaPencil,
    FaQuestion, FaQuoteRight,
    FaTriangleExclamation, FaXmark
} from "react-icons/fa6";
import {ReactNode} from "react";

export type CalloutType =
    "note"
    | "info"
    | "todo"
    | "tip"
    | "success"
    | "question"
    | "warning"
    | "failure"
    | "danger"
    | "example"
    | "quote"

export const calloutStyles: Record<CalloutType, Record<"color" | "bg" | "border", string>> = {
    note: {
        color: "text-ctp-lavender",
        bg: "bg-ctp-lavender",
        border: "border-ctp-lavender",
    },
    info: {
        color: "text-ctp-blue",
        bg: "bg-ctp-blue",
        border: "border-ctp-blue",
    },
    todo: {
        color: "text-ctp-blue",
        bg: "bg-ctp-blue",
        border: "border-ctp-blue",
    },
    tip: {
        color: "text-ctp-teal",
        bg: "bg-ctp-teal",
        border: "border-ctp-teal",
    },
    success: {
        color: "text-ctp-green",
        bg: "bg-ctp-green",
        border: "border-ctp-green",
    },
    question: {
        color: "text-ctp-yellow",
        bg: "bg-ctp-yellow",
        border: "border-ctp-yellow",
    },
    warning: {
        color: "text-ctp-peach",
        bg: "bg-ctp-peach",
        border: "border-ctp-peach",
    },
    failure: {
        color: "text-ctp-red",
        bg: "bg-ctp-red",
        border: "border-ctp-red",
    },
    danger: {
        color: "text-ctp-red",
        bg: "bg-ctp-red",
        border: "border-ctp-red",
    },
    example: {
        color: "text-ctp-mauve",
        bg: "bg-ctp-mauve",
        border: "border-ctp-mauve",
    },
    quote: {
        color: "text-ctp-flamingo",
        bg: "bg-ctp-flamingo",
        border: "border-ctp-flamingo",
    }
}

export const calloutIcons: Record<CalloutType, ReactNode> = {
    note: <FaPencil/>,
    info: <FaCircleInfo/>,
    todo: <FaCircleCheck/>,
    tip: <FaFireFlameCurved/>,
    success: <FaCheck/>,
    question: <FaQuestion/>,
    warning: <FaTriangleExclamation/>,
    failure: <FaXmark/>,
    danger: <FaBoltLightning/>,
    example: <FaList/>,
    quote: <FaQuoteRight/>
}