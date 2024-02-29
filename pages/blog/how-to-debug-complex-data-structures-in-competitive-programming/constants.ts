export const hashmapDebug = `unordered_map<int, int> mp;
/* do some processing */
for (auto &i: mp) {
    cout << i.first << " " << i.second << "\\n";
}`
export const desiredDebug = `dbg(n, m, dp, "HI");`

export const basicOverloading = `void debug_print(const vector<int> &t) {
    for(auto &i: t) {
        cout << i << " ";
    }
    cout << "\\n";
    
void debug_print(int t) {
    cout << t << "\\n";
}`

export const basicOverloadingShow = `int main() {
    int n = 5;
    vector<int> a = {6, 2, 4, 5, 7};
    debug_print(n); 
    debug_print(a); 
}`

export const basicOverloadingOutput = `5
6 2 4 5 7`

export const genericOverloading = `template <typename T>
void debug_print(const vector<T> &t) {
    for(auto &i: t) {
        cout << i << " ";
    }
    cout << "\\n";
}`

export const rangesOverloading = `template <ranges::range T>
void debug_print(const T &t) {
    for(auto &i: t) {
        cout << i << " ";
    }
    cout << "\\n";
}`

export const printableConcept = `template <typename T>
concept printable = requires(T t) {
    { cout << t } -> same_as<ostream &>;
};

template <printable T>
void debug_print(const T &t) {
    cout << t;
}`

export const recursiveDebug = `template <printable T>
void debug_print(const T &t) {
    cout << t;
}

template <ranges::range T>
void debug_print(const T &t) {
    for(auto &i: t) {
        debug_print(i);
        cout << " ";
    }
    cout << "\\n";
}

int main() {
    vector<vector<int>> a(2, vector<int>(3, 0));
    debug_print(a); 
}`

export const fullDebug = `template <typename E> struct DebugSingle {
  int start_row;
  bool last;

  DebugSingle(E data, int start_row, bool last)
      : start_row(start_row), last(last) {
    traverse(data, 0, false);
    cerr << "\\n";
    cerr.flush();
  }

  void initialize_line(int depth) {
    cerr << "\\n" << (last ? " " : "│");
    for (int i = 0; i < start_row + depth; i++)
      cerr << ' ';
  }

  template <printable T>
  void traverse(const T &t, int depth, bool nl)
    requires(!is_arithmetic<T>::value)
  {
    (void)nl;
    (void)depth;
    cerr << BOLDWHITE << t << RESET;
  }

  void traverse(bool t, int depth, bool nl) {
    (void)nl;
    (void)depth;
    if (t) {
      cerr << BOLDGREEN << 'T' << RESET;
    } else {
      cerr << BOLDRED << 'F' << RESET;
    }
  }

  template <printable T>
  void traverse(T t, int depth, bool nl)
    requires(is_arithmetic<T>::value)
  {
    (void)nl;
    (void)depth;
    if (t == numeric_limits<T>::max())
      cerr << BOLDWHITE "inf" << RESET;
    else if (t == numeric_limits<T>::min())
      cerr << BOLDWHITE << "-inf" << RESET;
    else
      cerr << BOLDWHITE << t << RESET;
  }

  void traverse(const char *t, int depth, bool nl) {
    (void)nl;
    (void)depth;
    string s = '"' + string(t) + '"';
    cerr << BOLDMAGENTA << s << RESET;
  }

  void traverse(const string &t, int depth, bool nl) {
    (void)nl;
    (void)depth;
    string s = '"' + t + '"';
    cerr << BOLDMAGENTA << s << RESET;
  }

  template <typename T, typename U>
  void traverse(const pair<T, U> &t, int depth, bool nl) {
    (void)nl;
    cerr << depth_color(depth) << "(" << RESET;
    traverse(t.fi, depth + 1, false);
    cerr << ": ";
    traverse(t.se, depth + 1, true);
    cerr << depth_color(depth) << ")" << RESET;
  }

  template <typename... T>
  void traverse(const tuple<T...> &t, int depth, bool nl) {
    (void)nl;
    int n = 0;
    auto handle_sep = [&](auto &&arg) {
      if (n)
        cerr << " ";
      traverse(arg, depth + 1, n);
      print_subscript(n, depth, n);
      n++;
    };
    apply(
        [&](auto &&...args) {
          cerr << depth_color(depth) << "(" << RESET;
          ((handle_sep(args)), ...);
          cerr << depth_color(depth) << ")" << RESET;
        },
        t);
  }

  template <typename T> void traverse(queue<T> t, int depth, bool nl) {
    // do not pass by reference!!
    vector<T> converted;
    while (!t.empty()) {
      converted.push_back(t.front());
      t.pop();
    }
    traverse(converted, depth, nl);
  }

  template <typename T> void traverse(priority_queue<T> t, int depth, bool nl) {
    // do not pass by reference!!
    vector<T> converted;
    while (!t.empty()) {
      converted.push_back(t.top());
      t.pop();
    }
    traverse(converted, depth, nl);
  }

  template <typename T> void traverse(stack<T> t, int depth, bool nl) {
    deque<T> converted;
    while (!t.empty()) {
      converted.push_front(t.top());
      t.pop();
    }
    traverse(converted, depth, nl);
  }

  template <ranges::range T> void traverse(const T &t, int depth, bool nl) {
    if (nl)
      initialize_line(depth);
    cerr << depth_color(depth) << "[" << RESET;
    int n = 0;
    for (const auto &i : t) {
      if (n)
        cerr << " ";
      traverse(i, depth + 1, n);
      print_subscript(n, depth);
      n++;
    }
    cerr << depth_color(depth) << "]" << RESET;
  }
};`

export const recursiveDebugOutput = `0 0 0
0 0 0`

export const variadicArguments = `template <typename T> // one argument remaining
void debug(const T &t) {
  debug_print(t);
  cout << "\\n";
}

template <typename T, typename... U> // several arguments remaining
void debug(const T &t, U &&...u) {
  debug_print(t);
  cout << "\\n";
  debug(u...);
}

int main() {
  int n = 5;
  vector<int> a = {6, 2, 4, 5, 7};
  debug(n, a);
}`

export const variadicArgumentsOutput = `5
6 2 4 5 7`

export const macroDebug = `#define dbg(...) Debug(#__VA_ARGS__, __LINE__, __FUNCTION__, __VA_ARGS__)`

export const parseDebug = `struct Debug {
  int max_name_len = 0;
  int min_tree_prefix = 3;
  queue<string> variable_names;

  template <typename T> void init_variable(T data, bool last) {
    cerr << (last ? "└" : "├");
    for (int i = 0; i < max_name_len - (int)variable_names.front().length();
         i++) {
      cerr << "─";
    }
    cerr << ' ' << RED << variable_names.front() << ": " << RESET;
    variable_names.pop();
    DebugSingle(data, max_name_len + min_tree_prefix, last);
  }

  template <typename T> void debug(const T &t) { init_variable(t, true); }

  template <typename T, typename... U> void debug(const T &t, U &&...u) {
    init_variable(t, false);
    debug(u...);
  }

  template <typename... T>
  Debug(const char *s, const int line, const string &func, T &&...t) {
    // parse the arguments
    string name;
    int paren_cnt = 0;
    bool is_quote = false;
    for (int i = 0; s[i] != '\\0'; i++) {
      if (s[i] == ',' && !paren_cnt && !is_quote) {
        variable_names.push(name);
        max_name_len = max(max_name_len, (int)name.length());
        name = "";
        while (s[i + 1] == ' ')
          i++;
      } else {
        switch (s[i]) {
        case '(':
        case '{':
        case '<':
        case '[':
          paren_cnt++;
          break;
        case ')':
        case '}':
        case '>':
        case ']':
          paren_cnt--;
          break;
        case '"':
          is_quote = !is_quote;
          break;
        }
        name += s[i];
      }
    }
    variable_names.push(name);
    max_name_len = max(max_name_len, (int)name.length());

    // iterate over the data
    cerr << RED << "Debug at line " << BOLDRED << line << RESET << RED
         << " in function " << BOLDRED << func << RESET << RED << ": " << RESET
         << '\\n';
    debug(t...);
  }
};`

export const debugHelpers = `vector<string> to_subscript = {
    "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉",
};
vector<string> d_to_color = {BLUE, CYAN, GREEN, YELLOW};

string depth_color(int d) { return d_to_color[d % d_to_color.size()]; }

void print_subscript(int n, int depth, int cnt = 0) {
  if (n <= 0 && cnt > 0)
    return;
  print_subscript(n / 10, depth, ++cnt);
  cerr << depth_color(depth) << to_subscript[n % 10] << RESET;
}`

export const testDebug = `int main() {
  vector<bool> v_of_bool = {true, false, false, true, false};
  vector<int> v_of_int = {INT_MAX, 2, 3, 4, INT_MIN};
  tuple<string, pair<int, int>> nested_tuples = {"debug!", {8, 8}};
  auto nested_vec = ndvec<int>(4, 3, 2, 0);
  dbg("string_literal", v_of_bool, v_of_int, nested_tuples, nested_vec);
}`;

export const testDebugOutput = `Debug at line 56 in function main: 
├ "string_literal": "string_literal"
├─────── v_of_bool: [T₀ F₁ F₂ T₃ F₄]
├──────── v_of_int: [inf₀ 2₁ 3₂ 4₃ -inf₄]
├─── nested_tuples: ("debug!"₀ (8: 8)₁)
└────── nested_vec: [[[0₀ 0₁]₀ 
                      [0₀ 0₁]₁ 
                      [0₀ 0₁]₂]₀ 
                     [[0₀ 0₁]₀ 
                      [0₀ 0₁]₁ 
                      [0₀ 0₁]₂]₁ 
                     [[0₀ 0₁]₀ 
                      [0₀ 0₁]₁ 
                      [0₀ 0₁]₂]₂ 
                     [[0₀ 0₁]₀ 
                      [0₀ 0₁]₁ 
                      [0₀ 0₁]₂]₃]`

export const compilerFlags = `#ifdef LOCAL
#define dbg(...) Debug(#__VA_ARGS__, __LINE__, __FUNCTION__, __VA_ARGS__)
#else
#define dbg(...) 42
#endif`

export const compilerArgs = `g++ -std=c++20 -DLOCAL -Wall -Wextra -Wno-sign-conversion -O2 -o main main.cpp`

export const dijkstraCode = `void solve() {
  int n, m;
  cin >> n >> m;
  vector<vector<pair<int, int>>> adj(n + 1);
  for (int i = 0; i < m; i++) {
    int a, b, w;
    cin >> a >> b >> w;
    adj[a].emplace_back(b, w);
    adj[b].emplace_back(a, w);
  }

  vector<long long> d(n + 1, LLONG_MAX);
  vector<int> par(n + 1);
  using T = pair<long long, int>;
  priority_queue<T, vector<T>, greater<T>> pq;
  pq.push({0, n});
  d[n] = 0;
  par[n] = -1;
  while (!pq.empty()) {
    long long c;
    int node;
    tie(c, node) = pq.top();
    pq.pop();

    if (c != d[node])
      continue;

    for (auto &i : adj[node]) {
      if (c + i.second < d[i.first]) {
        d[i.first] = c + i.second;
        par[i.first] = node;
        pq.push({d[i.first], i.first});
      }
    }
  }
  dbg(adj, d, par); // debugging the adjacency list, distances, and parent array

  if (d[1] == LLONG_MAX)
    cout << -1 << "\\n";
  else {
    int cur = 1;
    while (cur != -1) {
      cout << cur << " ";
      cur = par[cur];
    }
    cout << "\\n";
  }
}`

export const dijkstraOutput = `5 6
1 2 2
2 5 5
2 3 4
1 4 1
4 3 3
3 5 1
Debug at line 87 in function solve: 
├─ adj: [[]₀ 
│        [(2: 2)₀ (4: 1)₁]₁ 
│        [(1: 2)₀ (5: 5)₁ (3: 4)₂]₂ 
│        [(2: 4)₀ (4: 3)₁ (5: 1)₂]₃ 
│        [(1: 1)₀ (3: 3)₁]₄ 
│        [(2: 5)₀ (3: 1)₁]₅]
├─── d: [9223372036854775807₀ 5₁ 5₂ 1₃ 4₄ 0₅]
└─ par: [0₀ 4₁ 5₂ 5₃ 3₄ -1₅]
1 4 3 5`
