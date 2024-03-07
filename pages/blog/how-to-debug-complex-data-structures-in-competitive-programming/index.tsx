import {Code, Paragraph, Title, InlineCode, Header, SubHeader, Link, Image} from "@/components/utils";
import {Body, Callout, BlogContainer} from "@/components/layout";
import {
    basicOverloading,
    basicOverloadingOutput,
    basicOverloadingShow,
    compilerFlags,
    debugHelpers,
    desiredDebug,
    dijkstraCode,
    dijkstraOutput,
    fullDebug,
    genericOverloading,
    hashmapDebug,
    macroDebug,
    parseDebug,
    printableConcept,
    rangesOverloading,
    recursiveDebug,
    recursiveDebugOutput,
    testDebug,
    testDebugOutput,
    variadicArguments,
    variadicArgumentsOutput
} from "@/pages/blog/how-to-debug-complex-data-structures-in-competitive-programming/constants";

export default function Page() {
    return (
        <BlogContainer>
            <Body>
                <Title>How to Debug Complex Data Structures in Competitive Programming</Title>
                <Paragraph>
                    Imagine this. You&apos;re trying to solve everyone&apos;s favorite problem, TwoSum, in C++. You write up your
                    solution, using the magical and mysterious creature known as the &quot;hashmap&quot;. But there&apos;s a bug.
                    Stumped, you try to print out the contents of your hashmap to the terminal. Andddddd, you have to
                    type all of this:
                </Paragraph>
                <Code code={hashmapDebug} language={"cpp"}/>
            </Body>
            <Callout title={"Note"} type={"note"}>
                <Paragraph>
                    If you don&apos;t have access to your debug header file, you can use macros and defines such as
                    using <InlineCode>fi</InlineCode> and <InlineCode>se</InlineCode> instead
                    of <InlineCode>first</InlineCode> and <InlineCode>second</InlineCode>. However, it&apos;s still a lot of
                    typing, especially if you have to do it multiple times.
                </Paragraph>
            </Callout>
            <Body>
                <Paragraph>
                    Doesn&apos;t seem like much on the screen, but it takes several seconds to type, even at 150wpm. But not
                    only that, what if the hashmap wasn&apos;t even the root of your problems? Is it time to write another
                    loop to print out the contents of a <InlineCode>vector</InlineCode>? And what if you have to
                    print out an <InlineCode>std::array</InlineCode>, of <InlineCode>std::vector</InlineCode>,
                    of <InlineCode>std::pair</InlineCode> of integers?
                </Paragraph>
                <Paragraph>
                    If you&apos;ve ever done competitive programming on a site like <Link newTab={true}
                                                                                     href={"https://usaco.org"}>USACO</Link> or <Link
                    newTab={true} href={"https://codeforces.com"}>Codeforces</Link>,
                    you&apos;ve probably related to these struggles in some form or another. Visualizing the information in
                    the data structures you use should be a useful option when trying to debug your code. Let&apos;s make it
                    so that is the case.
                </Paragraph>
                <Header>
                    The Main Idea
                </Header>
                <Paragraph>
                    I want to visualize the contents of any variable, with one line of code, regardless of type:
                </Paragraph>
                <Code code={desiredDebug} language={"cpp"}/>
                <Paragraph>
                    I shouldn&apos;t have to comment out this line when submitting to online judges, and it should present
                    the data in a way that doesn&apos;t hinder any brainpower left for debugging. Let&apos;s start with point
                    number one: one function for everything.
                </Paragraph>
                <Header>
                    One Function to Rule Them All
                </Header>
                <SubHeader>
                    Overloading
                </SubHeader>
                <Paragraph>
                    Some people know where I might be going with this. We can use function overloading to allow the same
                    function to handle multiple data types. With this technique, we can create a function that
                    distinguishes between a normal <InlineCode>int</InlineCode> as well as
                    a <InlineCode>vector</InlineCode> of <InlineCode>int</InlineCode>s.
                </Paragraph>
                <Code code={basicOverloading} language={"cpp"}/>
                <Paragraph>
                    Then, the compiler will determine which function should be called when we run our program:
                </Paragraph>
                <Code code={basicOverloadingShow} output={basicOverloadingOutput} language={"cpp"}/>
                <Paragraph>
                    But, what if we want to implement this function for a <InlineCode>float</InlineCode>? What about
                    a <InlineCode>unordered_set</InlineCode>? And
                    a <InlineCode>vector</InlineCode> of <InlineCode>vector</InlineCode> of <InlineCode>int</InlineCode>s?
                    Surely we don&apos;t copy and paste the same template for every single data structure... right?
                </Paragraph>
                <Paragraph>
                    We can improve overloading further by using templates. Templates allow us to re-use the same
                    functions for multiple data types. Let&apos;s try to apply them to the previous example:
                </Paragraph>
                <Code code={genericOverloading} language={"cpp"}/>
                <Paragraph>
                    This is a function that can print out any <InlineCode>vector</InlineCode>, as long as its inner type
                    can be written to the output stream. However, while this works for any
                    1D <InlineCode>vector</InlineCode>, this won&apos;t work for any 2D or 3D data structures. Is this truly
                    the best that we can do?
                </Paragraph>
            </Body>
            <Callout title={"Note"} type={"note"}>
                <Paragraph>
                    We actually see these types of data structures more often than you think. Consider an adjacency list
                    that represents a graph: that&apos;s a 2D data structure. Any problem that involves moving on a grid?
                    Another
                    2D data structure. With more complicated DP problems, you might even see a 3D and even 4D data
                    structures.
                </Paragraph>
            </Callout>
            <Body>
                <SubHeader>
                    Concepts
                </SubHeader>
                <Paragraph>
                    Fortunately for us, C++ 20 has arrived just in time. C++ 20 introduces concepts, which are special
                    ways of telling the compiler which data types can be used on different functions. We can use
                    concepts to control the types of data structures that can be used with our debug function. Let&apos;s see
                    an example:
                </Paragraph>
                <Code code={rangesOverloading} language={"cpp"}/>
                <Paragraph>
                    Here, <InlineCode>ranges::range</InlineCode> is a C++ concept in the standard library that describes
                    all data types/structures that
                    (1) have <InlineCode>begin()</InlineCode> and <InlineCode>end()</InlineCode> that (2) form a range,
                    and (3) can be retrieved in amortized constant time. Therefore, this piece of code works not only
                    for <InlineCode>vector</InlineCode>s, but
                    also <InlineCode>set</InlineCode>, <InlineCode>unordered_set</InlineCode>, <InlineCode>deque</InlineCode>,
                    etc. Reusable code!
                </Paragraph>
                <Paragraph>
                    We can expand upon this by creating our own printable concept, creating a function that is
                    responsible for printing out the base level data types in any container:
                </Paragraph>
                <Code code={printableConcept} language={"cpp"}/>
                <Paragraph>
                    Now that we have a function responsible for iterating over the contents of a container, as well as a
                    function that print outs the contents of any container, we can recursively chain them, creating a
                    solution that can print out a container of any depth!
                </Paragraph>
            </Body>
            <Callout title={"Note"} type={"note"}>
                <Paragraph>
                    Note that for certain collections, such as <InlineCode>std::map</InlineCode>, we must include
                    another
                    function to recursively print out pairs. Furthermore, there exists collections such
                    as <InlineCode>std::stack</InlineCode>, <InlineCode>std::queue</InlineCode>,
                    and <InlineCode>std::priority_queue</InlineCode> that do not support range iterators. In that case,
                    we
                    must either convert them
                    to <InlineCode>std::deque</InlineCode> or <InlineCode>std::vector</InlineCode>,
                    or write a separate function to debug their contents.
                </Paragraph>
            </Callout>
            <Body>
                <Code code={recursiveDebug} output={recursiveDebugOutput} language={"cpp"}/>
                <Paragraph>
                    Below is the full code that handles all types of containers, etc. Note that instead of a function, I
                    use a <InlineCode>struct</InlineCode>&apos;s initializer. Functions
                    like <InlineCode>initialize_line</InlineCode>, <InlineCode>depth_color</InlineCode>,
                    and <InlineCode>print_subscript</InlineCode> as well as variables
                    like <InlineCode>start_row</InlineCode>, <InlineCode>depth</InlineCode> and <InlineCode>last</InlineCode> are
                    auxiliary and help with formatting - more on all of this later.
                </Paragraph>
                <Code code={fullDebug} language={"cpp"} expand={true}/>
            </Body>
            <Callout type={"note"} title={"Note"}>
                <Paragraph>
                    The colors labeled in capital letters like <InlineCode
                    color={"text-ctp-red"}>RED</InlineCode> and <InlineCode
                    color={"text-ctp-green"}>GREEN</InlineCode> are
                    just more C++ macros that I&apos;ve defined. They replace to <Link newTab={true}
                                                                                  href={"https://en.wikipedia.org/wiki/ANSI_escape_code"}>ANSI
                    escape codes</Link>, which allows me to
                    color the output of my debug function. They are taken from <Link newTab={true}
                                                                                     href={"https://stackoverflow.com/questions/9158150/colored-output-in-c"}>this</Link> StackOverflow
                    post.
                </Paragraph>
            </Callout>
            <Body>
                <Paragraph>
                    But note that we don&apos;t have to stop here:
                </Paragraph>
                <SubHeader>
                    Variadic Arguments
                </SubHeader>
                <Paragraph>
                    With variadic arguments, we can &quot;iterate&quot; over the parameters of a function, allowing us to print
                    each and every single one of them:
                </Paragraph>
                <Code code={variadicArguments} output={variadicArgumentsOutput} language={"cpp"}/>
                <Paragraph>
                    While the <InlineCode>debug</InlineCode> function has more than one argument, it will print out that
                    argument with the call to the <InlineCode>debug_print</InlineCode> function. Then, it will call
                    itself with the rest of its arguments. Basically, with a combination of function overloads,
                    recursive calls, generic templates, and a base case, we can call
                    our <InlineCode>debug_print</InlineCode> function on all the arguments passed into
                    the <InlineCode>debug</InlineCode> function!
                </Paragraph>
                <Paragraph>
                    While we are here, I&apos;ve started to notice that our debug function won&apos;t be very helpful for
                    debugging if we don&apos;t know what data corresponds to which variable. Fortunately for us, we can pass
                    in variable names to our function using C++ macros!
                </Paragraph>
                <Code code={macroDebug} language={"cpp"}/>
                <Paragraph>
                    Here <InlineCode>__VA_ARGS__</InlineCode> is a special macro that represents all the arguments
                    passed into the function. <InlineCode>#__VA_ARGS__</InlineCode> is a C string that represents the
                    name of these
                    arguments. <InlineCode>__LINE__</InlineCode> and <InlineCode>__FUNCTION__</InlineCode> are the names
                    of the function the debug function was called in, as well as what line it was called on. All the
                    information you can get helps with debugging!
                </Paragraph>
                <Paragraph>
                    Now for the <InlineCode>parse_debug</InlineCode> function (lots of edge cases to consider!):
                </Paragraph>
                <Code code={parseDebug} language={"cpp"} expand={true}/>
                <Paragraph>
                    Remember the <InlineCode>initialize_line</InlineCode> function? You can see the rest of the logic
                    here. My code includes some extra features, such as a <InlineCode>tree</InlineCode>-like indicator
                    for each variable. Furthermore, instead of redundant commas, Unicode subscript numbers
                    like <InlineCode>₅</InlineCode> are used to separate variables as well as label indices of elements
                    in a container. And finally, I have my own implementation for rainbow parentheses, which helps debug
                    depthy data structures. With some additional helpers:
                </Paragraph>
                <Code code={debugHelpers} language={"cpp"} expand={true}/>
                <Paragraph>
                    I can get my debug output looking something like this:
                </Paragraph>
                <Code code={testDebug} output={testDebugOutput} language={"cpp"}/>
            </Body>
            <Callout type={"note"} title={"Note"}>
                <Paragraph>
                    With the ANSI escape codes, the output looks more like this (I&apos;m not trying to convert all that into
                    HTML!):
                </Paragraph>
                <Image
                    src={"/how-to-debug-complex-data-structures-in-competitive-programming/debug.png"}
                    alt={"debug image"}
                    width={500}
                    height={300}
                    caption={"What I see in my catppuccin-themed terminal."}
                />
            </Callout>
            <Body>
                <Paragraph>
                    Great! Now we can finish debugging and submit our code to the online judge. And.... oh. We&apos;ve
                    received TLE because we forgot to comment out our debug call! Let&apos;s change that.
                </Paragraph>
                <Header>
                    Obeying the Judge
                </Header>
                <SubHeader>
                    Compiler Flags
                </SubHeader>
                <Paragraph>
                    How can our debug function differentiate between running on our local computer and running on the
                    online judge? It doesn&apos;t! Instead, we use compiler flags and <i>even more</i> C++ preprocessing to
                    achieve our goal (LOL). Here is how it&apos;s done:
                </Paragraph>
                <Code code={compilerFlags} language={"cpp"}/>
                <Paragraph>
                    If the <InlineCode>LOCAL</InlineCode> flag is defined, then
                    the <InlineCode>dbg</InlineCode> function is activated in all of its glory.
                    Otherwise, <InlineCode>dbg</InlineCode> instead gives us the answer to life, the universe, and
                    everything (or at least all the test cases).
                </Paragraph>
                <Header>
                    Conclusion
                </Header>
                <Paragraph>
                    You can find the full debug file, all put together <Link newTab={true}
                                                                             href={"https://github.com/raybbian/comp-programming/blob/master/debug/debug.hpp"}>here</Link>.
                    Otherwise,
                    I&apos;ll leave you with another example on how the debug function could be used for graphs:
                </Paragraph>
                <Code code={dijkstraCode} output={dijkstraOutput} language={"cpp"} expand={true}/>
                <Paragraph>
                    Happy debugging (you will hit red soon)!
                </Paragraph>
            </Body>
        </BlogContainer>
    );
}